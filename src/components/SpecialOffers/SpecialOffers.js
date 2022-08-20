import React from 'react';
import style from './SpecialOffers.module.css'

const SpecialOffers = () => {
    return (
        <div style={{height:'300px'}} className={"flex flex-col justify-center  ml-28 bg-warning my-8 " + style.background}>
            <p className='text-2xl pt-4 text-center font-bold'>Repair Sarvice</p>
            <p className='text-center my-12 text-white text-3xl'>Up to <span className='text-error font-bold text-5xl'>70% Off</span> -All t-Shirt & Accessories</p>
            <div className='flex items-center justify-center'>
            <button className='btn text-white btn-info'>Explore More</button>
            </div>
        </div>
    );
}

export default SpecialOffers;
