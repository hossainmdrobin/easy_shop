import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = ({ active, setActive }) => {
    // const [active, setActive] = useState(1)
    const [open, setOpen] = useState(false)
    return (
        <div>
            <div onMouseOver={() => setOpen(false)} onMouseOut={() => setOpen(true)} className={`navigation z-10 ${open ? 'active' : ''}active`}>
                <ul>
                    <li onClick={() => setActive(1)} className={`list ${active === 1 ? 'active' : ''}`}>
                        <b></b>
                        <b></b>
                        <Link to="/">
                            <span className="icon">
                                <ion-icon name="home-outline"></ion-icon>
                            </span>
                            <span className="title">Home</span>
                        </Link>
                    </li>
                    <li onClick={() => setActive(2)} className={`list ${active === 2 ? 'active' : ''}`}>
                        <b></b>
                        <b></b>
                        <Link to="/dashboard">
                            <span className="icon">
                                <ion-icon name="grid-outline"></ion-icon>
                            </span>
                            <span className="title">Dashboard</span>
                        </Link>
                    </li>
                    <li onClick={() => setActive(3)} className={`list ${active === 3 ? 'active' : ''}`}>
                        <b></b>
                        <b></b>
                        <Link to="/cart">
                            <span className="icon">
                                <ion-icon name="cart-outline"></ion-icon>
                            </span>
                            <span className="title">Cart</span>
                        </Link>
                    </li>
                    <li onClick={() => setActive(4)} className={`list ${active === 4 ? 'active' : ''}`}>
                        <b></b>
                        <b></b>
                        <Link to="/shop">
                            <span className="icon">
                                <ion-icon name="bag-handle-outline"></ion-icon>
                            </span>
                            <span className="title">Shop</span>
                        </Link>
                    </li>
                    <li onClick={() => setActive(5)} className={`list ${active === 5 ? 'active' : ''}`}>
                        <b></b>
                        <b></b>
                        <Link to="/manage">
                            <span className="icon">
                                <ion-icon name="create-outline"></ion-icon>
                            </span>
                            <span className="title">Manage</span>
                        </Link>
                    </li>
                    <li onClick={() => setActive(7)} className={`list ${active === 7 ? 'active' : ''}`}>
                        <b></b>
                        <b></b>
                        <Link to="/">
                            <span className="icon">
                                <ion-icon name="lock-closed-outline"></ion-icon>
                            </span>
                            <span className="title">Password</span>
                        </Link>
                    </li>
                    {/* <li onClick={() => setActive(6)} className={`list ${active === 6 ? 'active' : ''}`}>
                        <b></b>
                        <b></b>
                        <a href="#">
                            <span className="icon">
                                <ion-icon name="log-out-outline"></ion-icon>
                            </span>
                            <span className="title">Signout</span>
                        </a>
                    </li> */}
                    <li onClick={() => setActive(6)} className={`list ${active === 6 ? 'active' : ''}`}>
                        <b></b>
                        <b></b>
                        <Link to="/signup">
                            <span className="icon">
                                <ion-icon name="log-in-outline"></ion-icon>
                            </span>
                            <span className="title">Signup</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={`toggle2 z-10 ${!open ? 'active' : ''}`} onClick={() => setOpen(!open)}>
                {open && <ion-icon name="menu-outline" className='open'></ion-icon>}
                {!open && <ion-icon name="close-outline" className='close'></ion-icon>}
            </div>
        </div>
    );
}

export default Sidebar;
