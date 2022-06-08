import React, { useEffect, useState } from 'react';
import FoodItems from './FoodItems';
import "../food.css"

function MainApp(props) {

    const [foodData, setFoodData] = useState([])
    const [rated, setRating] = useState([])
    const [trigger, setTrigger] = useState(false)

    useEffect(function(){
        fetch(`https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json`)
            .then(blob => blob.json())
            .then(data => setFoodData(data) )
    },[])

    useEffect(function(){
        rated.splice(-4,rated.length-3)
        if(rated.length === 3){
            setTrigger(true)          
        }
    }, [rated.length])

    function handleClick(e){
        let id = parseFloat(e.target.dataset.id) - 1
        if(e.target.checked){
            setRating([...rated, 
                {id : foodData[id].id,
                dishName : foodData[id].dishName,
                image:foodData[id].image
                }
            ]);
        }
        else
            rated.pop()
    }

    console.log(rated)
    
    const selection = (
        <>
        <h1>Please Select your top 3 Dishes</h1>
        <div className='food-list'>
            {foodData.map(food=> <FoodItems key={food.id} 
                                            id={food.id} 
                                            description={food.description} 
                                            dishName={food.dishName} 
                                            image={food.image} 
                                            selection = {true}
                                            handleClick={handleClick}/>)}
        </div>
        </>
    )

    const final = (
        <>
        <h1>Your Final Food selections are</h1>
        <div className='food-list'>
            {rated.map((food,index)=> <FoodItems key={food.id} 
                                            id={food.id} 
                                            description={food.description} 
                                            dishName={food.dishName} 
                                            image={food.image} 
                                            done={true}
                                            index={index}
                                            handleClick={handleClick}/>)}
        </div>
        </>
    )

    return (
        trigger ? final : selection
    );
}

export default MainApp;
