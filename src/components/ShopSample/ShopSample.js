import React ,{useState,useEffect} from 'react';
import Card from '../Card/Card';

const ShopSample = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('http://localhost:8080/products/getProductByCatagory/t-shirt')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, []);
    return (
        <div className='ml-24 mt-8 flex flex-col justify-center'>
            <p className='text-center text-2xl font-bold'>Featured Products</p>
            <p className="text-center text-gray-400">Here we have the best collection for you</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 ml-4 py-12'>
                {
                    product.map(item => <Card item={item} key={item._id}/>)
                }
            </div>
            <div className='flex justify-center my-4'>
                <button className='btn btn-info w-44 btn-outline'>See More</button>
            </div>
            
        </div>
    );
}

export default ShopSample;
