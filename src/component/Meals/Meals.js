import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import './Meals.css'

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() =>{
        fetch('./meals.json')
          .then(res => res.json())
          .then(data => setMeals(data.meals))
    },[]);

    const handleAddCart = meal => {
       // console.log(meal);
        const newCart = [...cart, meal];
        setCart(newCart);
    }
    return (
        <div className='meals-container'>
            <div className='meal-container'>
                {
                    meals.map(meal => <Meal
                    key={meal.idMeal}
                    meal={meal}
                    handleAddCart={handleAddCart}
                    ></Meal>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Meals;