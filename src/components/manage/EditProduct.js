import React from 'react';

const EditProduct = () => {
    return (
        <div className='flex justify-center w-full'>
            <form className='ml-28 mr-20 w-full'>
                <p className="text-3xl text-center my-4">Edit Product</p>
                <div className='md:p-2 md:flex'>
                    <div className='md:w-1/2'>
                        <input type="text" className='my-2 w-full input input-info' placeholder='product name' />
                        <input type="text" className='my-2 w-full input input-info' placeholder='product name' />
                        <input type="text" className='my-2 w-full input input-info' placeholder='product name' />
                    </div>
                    <div className='md:p-2 md:w-1/2'>
                        <input type="text" className='mb-2 w-full input input-info' placeholder='product name' />
                        <input type="text" className='my-2 w-full input input-info' placeholder='product name' />
                        <input type="file" name='photo' id='photo' className='hidden my-2 w-full input input-info' placeholder='product name' />
                        <label className='text-white btn-outline btn btn-info flex my-2 items-center justify-center' htmlFor="photo">
                            <div className='text-2xl mx-2 relative top-1'>
                                <ion-icon name="cloud-upload-outline"></ion-icon>
                            </div>
                            <span className='text-md'>Upload photo</span>
                        </label>
                    </div>
                </div>
                <div className='text-center my-2'>
                    <button className='btn w-64 btn-info text-white'>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default EditProduct;
