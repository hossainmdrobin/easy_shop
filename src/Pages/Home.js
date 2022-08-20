import React from 'react';
import Features from '../components/HomeComponents/Features';
import TopBanner from '../components/HomeComponents/TopBanner';
import NewArrivals from '../components/NewArrivals/NewArrivals';
import ShopSample from '../components/ShopSample/ShopSample';
import SpecialOffers from '../components/SpecialOffers/SpecialOffers';

const Home = () => {
    return (
        <div>
            <TopBanner />
            <div className='flex justify-center'>
                <Features />
            </div>
            <ShopSample />
            <SpecialOffers />
            <NewArrivals />

        </div>
    );
}

export default Home;
