import React from 'react'
import  Cardreci from '../card/Card';
import './listcard.css'

const ListCard = ({recipes,handleClick}) => {
    

    return (
        <div>
            <h1> Recipes </h1>
            <div className='lc'>{recipes.map(el=> <Cardreci key={el.recipe.uri.slice(51)} el={el} handleClick={handleClick}/>)}</div>
            
        </div>
    )
}

export default ListCard;
