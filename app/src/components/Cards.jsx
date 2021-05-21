import React, {useState, useEffect, useContext} from 'react';
import CardSolo from './CardSolo'

function Cards({collec}) {
    const [cards, setCards] = useState(null);

    const apiURL =  process.env.REACT_APP_API_URL;

    useEffect(() => {
        fetch(`${apiURL}/cards/collection/${collec._id}?detail=true`)
        .then(res => res.json())
        .then(res => setCards(res))
        
    }, [])

    return (
        <div>
            <h1>{ collec.name }</h1>
            {cards ? 
            (cards.map(card => {
                return <CardSolo data={card} key={card._id}/>
            }))
            : "No data"}
        </div>
    );
}

export default Cards;
       