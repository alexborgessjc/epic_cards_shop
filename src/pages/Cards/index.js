import { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import Card from '../../Components/Card';
import { useParams } from 'react-router-dom';{}

function Cards() {
  const params = useParams();
  const[cards, setCards] = useState([]);

  //Query params
  useEffect(()=>{
    async function handleGetCard(){
      const response = await fetch(`http://localhost:3333/cards?race=${params.category}`);
      const data = await response.json();
      setCards(data);
    }
    handleGetCard();  
  }, [params.category])

  return (
    <div>
        <Link to="/about">Ir para a página Sobre</Link>
      <h1>Total de cards: {cards.length}</h1>
      <div className='container'>
      {
        cards.map((card)=>(
          <Card 
          key = {card.id}//Propriedade que dá um 'id'.. apenas para nao dar erro na tela
          name={card.name} 
          image={card.card_images[0].image_url_small}
          type={card.type}
          ></Card>
        ))
      }
    </div>
    </div>
  );
}

export default Cards;
