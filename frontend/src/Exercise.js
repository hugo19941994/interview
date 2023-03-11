import {useState, useEffect} from "react";
import './Exercise.css';
import Card from "./Card";

function RightPanel({filtro}) {
  const [cards, setCards] = useState([]);

  async function getData() {
    /*
     * Call the API (made with Python)
     * Create one "card" per element in the response
     * Call SetCards with the elements to update the view
     * */
    fetch("http://127.0.0.1:5000/pois")
    .then(res=>res.json())
    .then(data=>{setCards(data)})
  }
  
  useEffect(() => {
    getData();
  }, [])

  return (
    <div id="RightPanel" className="SubPanel">
      <p>Number of results:
      {/* Para sacar el número de resultados */}
      {filtro === "Todos" && <span>{cards.length}</span>}
      {filtro === "Excelente" && <span>{cards.filter(card => card.rating == "Excelente").length}</span>}
      {filtro === "Muy bueno" && <span>{cards.filter(card => card.rating == "Muy bueno").length}</span>}
      </p>

      {/* Para mostrar los resultados según el rating */}
      {filtro === "Todos" && cards.map((card, index) => {
        return <Card key={card.name + card.phone} name={card.name} location={card.location} phone={card.phone} rating={card.rating} website={card.website} />
      })}

      {filtro === "Excelente" && cards.filter(card => card.rating == "Excelente").map((card, index) => {
        return <Card key={card.name + card.phone} name={card.name} location={card.location} phone={card.phone} rating={card.rating} website={card.website} />
      })} 

      {filtro === "Muy bueno" && cards.filter(card => card.rating == "Muy bueno").map((card, index) => {  
        return <Card key={card.name + card.phone} name={card.name} location={card.location} phone={card.phone} rating={card.rating} website={card.website} />
      })}

    </div>
  )
}



export default RightPanel;
