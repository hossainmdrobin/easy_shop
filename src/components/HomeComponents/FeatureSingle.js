import React from 'react';
import freeshipping from '../../assets/free-shipping.png'

const FeatureSingle = ({item}) => {
    return (
        <div className='bg-white p-6 shadow rounded bordered'>
            <img className='h-36 w-full rounded' src={item.photo} alt="" />
            <p className={`text-center ${item.color} text-white mt-3 rounded p-2`}>{item.title}</p>
        </div>
    );
}

export default FeatureSingle;
