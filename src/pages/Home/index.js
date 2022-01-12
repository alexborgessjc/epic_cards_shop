import React from 'react';
import Menu from '../Menu';
import { Link } from 'react-router-dom';
import { type } from '@testing-library/user-event/dist/type';

const TYPES = [
    "Aqua",
    "Beast-Warrior",
    "Cyberse",
    "Dinosaur",
    "Dragon",
    "Fairy",
    "Fish",
    "Insect",
    "Machine",
    "Plant",
    "Rock",
    "Warrior",
    "Spellcaster"
   ];

function Home(){
    return (
        <>             
            <div className='container-app'>            
                {TYPES.map((type)=> <div className='category-item'>
                    <Link to={`/cards/${type}`}>{type}</Link>
                </div>)}                
            </div>
        </>        
    )
}

export default Home;