import {useState, useEffect} from "react";
import './Exercise.css';

function RightPanel() {
  const [cards, setCards] = useState([]);

  async function getData() {
    /*
     * Call the API (made with Python)
     * Create one "card" per element in the response
     * Call SetCards with the elements to update the view
     * */
  }
  
  useEffect(() => {
    getData();
  }, [])

  return (
    <div id="RightPanel" className="SubPanel">
      { cards }
    </div>
  )
}

function Card(props) {
  /*
   * Render out a card class
   *
   * It should display the name, location,
   * phone number, rating and a link to the website
   *
   * Some restaurants contain an empty website.
   * Use conditional rendering to prevent displaying 
   * the website in those cases
   * */
}

export default RightPanel;
