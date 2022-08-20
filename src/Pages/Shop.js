import React,{useEffect, useState} from 'react';
import Card from '../components/Card/Card';

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:8080/products/getAllProduct')
        .then(res=> res.json())
        .then(data => setProducts(data))
        
    }, []);
    return (
        <div className='ml-24'>
            <div style={{ maxWidth: '800px' }} className='top-4 sm:w-1/2 lg:w-4/5 fixed text-end sm:mx-12'>
                <div class="w-full navbar bg-gray-200 bg-opacity-70 rounded-full">
                    <div class="navbar-start">
                        <div class="dropdown">
                            <label tabindex="0" class="btn btn-ghost btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                            </label>
                            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-200 rounded-box w-52">
                                <li><a>Homepage</a></li>
                                <li><a>Portfolio</a></li>
                                <li><a>About</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="navbar-end w-4/5 md:w-1/2">
                        <form action="" className='flex items-center relative w-full'>
                            <input type="text" className='input input-info rounded-full w-full' placeholder='Search here ...' />
                            <button class="btn btn-ghost btn-info btn-outline btn-circle absolute right-0 ">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className='mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-4 ml-4 py-12'>
                {
                    products.reverse().map(item=> <Card item={item} key={item._id}/>)
                }
            </div>
            paginations
        </div>
    );
}

export default Shop;
