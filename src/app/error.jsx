'use client'
import React from 'react';

const error = () => {
    return (
        <div className='flex items-center h-screen'>
            <h3 className='text-red-500 text-2xl'>Something went wrong! Please try again later!!
            </h3>
        </div>
    );
};

export default error;