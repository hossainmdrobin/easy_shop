import React from 'react';
import FeatureSingle from './FeatureSingle';
import freeshipping from '../../assets/free-shipping.png'
import onlineOrder from '../../assets/order.png'
import promotion from '../../assets/promotion.png'
import happySell from '../../assets/save-money.png'
import saveMoney from './../../assets/salary.png'

const FeatureDetial= [
    {
        title: 'Free Shipping',
        photo: freeshipping,
        color:'bg-info'
    },
    {
        title: 'Online Order',
        photo: onlineOrder,
        color:'bg-success'
    },
    {
        title: 'Promotion',
        photo: promotion,
        color: 'bg-warning'
    },
    {
        title: 'Happy Sell',
        photo: happySell,
        color: 'bg-secondary'
    },
    {
        title: 'Save money',
        photo: saveMoney,
        color:'bg-accent'
    },
    {
        title: '24/7 Support',
        photo: freeshipping,
        color:' bg-purple-500'
    }
]
const Features = () => {
    return (
        <div className='ml-24 w-full'>
            <div className="bg-gray-100 p-4 w-full gap-4 sm:grid-cols-2 grid md:grid-cols-4 lg:grid-cols-6">
                {
                    FeatureDetial.map(item=><FeatureSingle item={item} />)
                }
            </div>
        </div>
    );
}

export default Features;
