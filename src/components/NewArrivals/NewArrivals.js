import React,{useEffect, useState} from 'react';
import Card from '../Card/Card';

const NewArrivals = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        fetch('http://localhost:8080/products/getProductByCatagory/shoes')
        .then(res => res.json())
        .then(data => setProduct(data))
    }, []);
    return (
        <div className='ml-24 mt-8 flex flex-col justify-center'>
            <p className='text-center text-2xl font-bold'>New Arrivals</p>
            <p className="text-center text-gray-400">Summer Collection New Modern Design</p>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 ml-4 py-12'>
                {
                    product.map(item => <Card item={item} key={item._id}/>)
                }
            </div>
        </div>
    );
}

export default NewArrivals;
