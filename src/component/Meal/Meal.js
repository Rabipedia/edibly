import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './Meal.css';

const Meal = (props) => {
    //console.log(props.meal);
    const {strMeal, strArea, strCategory, strMealThumb} = props.meal;
    return (
        <div className='meal'>
           <div className='img'>
                <img src={strMealThumb} alt=""/>
           </div>
           <div className='meal-details'>
               <h3 className='meal-name'>{strMeal}</h3>
               <p>Area: {strArea}</p>
               <p><small>Category: {strCategory}</small></p>
               <button
                className='btn-regular'
                onClick={() => props.handleAddCart(props.meal)}><FontAwesomeIcon icon={faCartShopping} />add to cart
               </button>
           </div>
        </div>
    );
};

export default Meal;