import React,{useState} from 'react';
import AddProduct from '../components/manage/AddProduct';
import DisplayProducts from '../components/manage/DisplayProducts';
import EditProduct from '../components/manage/EditProduct';

const ManageProduct = () => {
    const [mode, setMode] = useState('add')
    return (

        <div className="flex flex-col w-full">
            <div className="grid card rounded-box place-items-center">
                <AddProduct />
                {/* <EditProduct /> */}
            </div>
            <div className="divider"></div>
            <div className="grid card rounded-box place-items-center">
                <DisplayProducts />
            </div>
        </div>

    );
}

export default ManageProduct;
