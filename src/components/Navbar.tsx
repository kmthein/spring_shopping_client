import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IoCart } from "react-icons/io5";
import { cartStore } from '../store/cartStore';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const Navbar = () => {
    const cartItems = cartStore((state) => state.items);

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

  return (
    <header style={{background: "#FFF"}}>
        <div className='header-container l-wrap-inner'>
            <div className='header-logo'>
                <h1><a href="" className='logo'>KAIVIS</a></h1>
            </div>
            <div style={{display: 'flex', gap: "80px", alignItems: "center"}}>
            <div className='header-nav'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Product</Link></li>
                    <li><Link to="/add-category">Add Category</Link></li>
                    <li><Link to="/category-list">Category List</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    {/* <li><a href="">Contact</a></li>
                    <li><Link to="/about">About</Link></li> */}
                </ul>
            </div>
            <div>
                <div style={{position: "relative"}}>
                    <IoCart style={{fontSize: "30px"}} onClick={handleOpen} />   
                    {
                        cartItems != 0 && (
                                <div style={{background: "red", fontSize: "15px", color: "white", width: "22px", height: "22px", borderRadius: "50%", display: "inline-flex", justifyContent: "center", alignItems: "center", position: "absolute", left: 22, bottom: 22}}>{cartItems}</div>
                        )
                    }            
                    <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                    >
                    <Box sx={style}>
                        <h2 style={{fontSize: "25px"}}>Total Products in Cart - {cartItems}</h2>
                    </Box>
                    </Modal>
                </div>
            </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar