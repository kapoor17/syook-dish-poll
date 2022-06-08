import React from 'react';
import "../food.css"

function FoodItems(props) {
    return (
        <div className="food-items" key={props.id}>
            <img className='food-image' src={props.image}/>
            <div className='selection'>
                <h2 className="food-name">{props.dishName}</h2>
                {props.selection ? <input className='checkbox' type="checkbox" name="rating" id="rating" data-id={props.id} onClick={props.handleClick}/> : ""}
                {props.done ? <h3>Rank {props.index + 1}</h3> : ""}
            </div>
            <p className="food-description">{props.description}</p>
        </div>
    );
}

export default FoodItems;