import React from "react";

const FoodCard = (props) => {
    const openWebsite = () => {
        window.open(props.website, "_blank");
    };

    return (
        <div className='FoodCard'>
            <img src={props.image}/>
            <h3>{props.name}</h3>
            <h4>{props.location}</h4>
            <button onClick={openWebsite}>View Website</button>
        </div>
    )
}

export default FoodCard;