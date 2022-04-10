import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import { addToDb, getStoredCart } from '../../utilities/fakedb'
import './Meals.css'

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayMeal, setDisplayMeal] = useState([])

    useEffect(() =>{
        fetch('./meals.json')
          .then(res => res.json())
          .then(data => setMeals(data.meals))
    },[]);

    useEffect(() =>{
        const savedCart = getStoredCart();
        if(meals.length){
            const storedCart = [];
            for(const key in savedCart){
                const addedMeal = meals.find(meal => meal.key === key);

                storedCart.push(addedMeal);
            }
            setCart(storedCart);
        }
    },[meals])

    const handleAddCart = meal => {
        console.log(meal);
        const newCart = [...cart, meal];
        setCart(newCart);
        addToDb(meal.idMeal);
    }

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchMeal = meals.filter(meal => meal.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayMeal(matchMeal);
    }
    return (
       <>
            <div className='search-container'>
                <input
                    type='text'
                    onChange={handleSearch}
                    placeholder='search meals'
                />
            </div>
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
       </>
    );
};

export default Meals;