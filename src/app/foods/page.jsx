import FoodCard from '@/components/FoodCard';
import React from 'react';

const FoodsPage = async() => {
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods')
    const data = await res.json()
    const foods = data.data
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-4 py-4'>
            {
                foods.map(food=><FoodCard key={food.id} food={food}/>)
            }
        </div>
    );
};

export default FoodsPage;