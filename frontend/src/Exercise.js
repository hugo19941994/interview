import {useState, useEffect} from "react";
import './Exercise.css';
import Card from "./Card";

function RightPanel() {
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
      {cards.map((card, index) => {
        return <Card key={card.name + card.phone} name={card.name} location={card.location} phone={card.phone} rating={card.rating} website={card.website} />
      })}

    {/* Si quisieramos mostrar sólo las cards son rating Excelente */}
    {/* {cards.filter(card => card.rating === "Excelente").map((card, index) => {
        return <Card key={card.name + card.phone} name={card.name} location={card.location} phone={card.phone} rating={card.rating} website={card.website} />
      })} */}


    </div>
  )
}



export default RightPanel;
