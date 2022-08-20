import React from 'react';
import some from '../../assets/shopgirl.png'
const Card = ({item}) => {
    return (
        <div className='p-4 shadow-lg rounded-lg border'>
            <img src={`http://localhost:8080/uploads/${item.photo}`} alt="product" />
            <div className="flex justify-between items-center px-6 py-4">
                <p>stock ready</p>
                <p>official store</p>
            </div>
            <p className='text-xl font-bold mb-4'>{item.name}</p>
            <p className="text-xl font-bold">USD {item.price}</p>
            <div><del className='text-gray-400'>USD {item.oldPrice}</del><span className='bg-info p-1 rounded text-sm ml-4 text-white'>20% save</span></div>
            <div className='my-4 flex items-center'>
                <div class="rating">
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                </div>
                <p className='text-success ml-8'>20k views</p>
            </div>
            <div className='flex justify-between items-center'>
                <button className='btn btn-sm btn-outline btn-info btn-circle shadow-xl text-xl'>
                    <ion-icon name="cart-outline"></ion-icon>
                </button>
                <button className='btn btn-sm btn-outline btn-info btn-circle shadow-xl text-xl'>
                    <ion-icon name="eye-outline"></ion-icon>
                </button>
                <button className='btn btn-sm btn-outline btn-info btn-circle shadow-xl text-xl'>
                    <ion-icon name="heart-outline"></ion-icon>
                </button>
            </div>
        </div>
    );
}

export default Card;
