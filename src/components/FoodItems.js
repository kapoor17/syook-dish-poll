import React from 'react';
import "../food.css"

function FoodItems(props) {
    return (
        <div className="food-items" key={props.id}>
            {props.selection ? <input type="checkbox" name="rating" id="rating" data-id={props.id} onClick={props.handleClick}/> : ""}
            <div className="food-name">{props.dishName}</div>
            <img src={props.image}/>
            <p className="description">{props.description}</p>
        </div>
    );
}

export default FoodItems;