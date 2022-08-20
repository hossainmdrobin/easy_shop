import React, { useState } from 'react';
import Blur from '../customFunctions/blur';

const AddProduct = () => {
    const [loading, setLoading] = useState(false)
    const [productDetail, setProductDetail] = useState({})
    const [file, setFile] = useState({})
    const [res, setRes] = useState({});

    const handleBlur = (e) => {
        Blur(e, productDetail, setProductDetail)
    }

    const handlechange = (e) => {
        setFile(e.target.files[0])
    }

    const handleSubmit = (e) => {
        setLoading(true)
        const formData = new FormData()
        formData.append('photo', file)
        Object.keys(productDetail).map(item => {
            formData.append(item, productDetail[item])
        })
        fetch("http://localhost:8080/products/add",
            {
                body: formData,
                method: "POST"
            })
            .then((res) => res.json())
            .then(data => {
                if (data) {
                    setLoading(false)
                    setRes(data)
                }
            })
            .catch(res => {
                console.log(res)
                setLoading(false)
            })
        e.preventDefault()
    }
    return (
        <div className='flex justify-center w-full'>
            <form onSubmit={handleSubmit} className='ml-28 mr-20 w-full'>
                <p className="text-3xl text-center my-4">Add a Product</p>
                <div className='shadow-xl rounded-lg p-2 md:p-2 md:flex'>
                    <div className='md:w-1/2'>
                        <input onBlur={handleBlur} type="text" name='name' className='my-2 w-full input input-info' placeholder='product name' />
                        
                        <input onBlur={handleBlur} type="text" name='title' className='my-2 w-full input input-info' placeholder='product title' />

                        <textarea onBlur={handleBlur} type="text" name='desc' className='my-2 h-24 w-full input input-info' placeholder='product description' />
                    </div>
                    <div className='md:p-2 md:w-1/2'>
                        <input onBlur={handleBlur} type="text" name='price' className='mb-2 w-full input input-info' placeholder='price' />
                        <input onBlur={handleBlur} type="text" name='oldPrice' className='my-2 w-full input input-info' placeholder='old price' />
                        <input onChange={handlechange} type="file" name='photo' id='photo' className='hidden my-2 w-full input input-info' placeholder='product name' />
                        <label className=' text-white btn btn-outline btn-info flex my-2 items-center justify-center' htmlFor="photo">
                            <div className='text-2xl mx-2 relative top-1'>
                                <ion-icon name="cloud-upload-outline"></ion-icon>
                            </div>
                            <span className='text-md'>Upload photo</span>
                        </label>
                    </div>
                </div>
                <div className='text-center my-2'>
                    {!loading && <button type='submit' className='btn w-64 btn-info text-white'>Save</button>}
                    {loading &&<button type='submit' className='btn loading w-64 btn-info text-white' disabled='disabled'>Save</button>}
                </div>
            </form>
        </div>
    );
}

export default AddProduct;
