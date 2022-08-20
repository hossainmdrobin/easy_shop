import React from 'react';
import style from './TopBanner.module.css'
import shopgirl from '../../assets/shopgirl.png'

const TopBanner = () => {
    return (
        <div className={'md:h-screen z-0 relative pl-28 flex-col-reverse md:flex-row flex justify-center items-center ' + style.topBanner}>
            <div className={'w-full md:w-1/2 flex flex-col justify-center items-center pl-8 h-full pt-8 '+ style.backgroundLeft}>
                <p className='font-bold text-xl'>Trade-in-offer</p>
                <p className='text-primary font-bold text-4xl my-6'>Supper value deals</p>
                <p className='text-info font-bold text-5xl my-4'>On all products</p>
                <p className='text-gray-400'>Save more with coupons & up to 70% off</p>
                <div>
                    <button className='flex btn-info text-md btn btn-outline mt-6'>Shop Now</button>
                </div>
            </div>
            <div className={`${style.background} w-full h-full md:w-1/2`}>
                <img className='h-full p-8' src={shopgirl} alt="" />
            </div>

        </div>
    );
}

export default TopBanner;
