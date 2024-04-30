import { AppBar } from '@mui/material'
import Toolbar from '@mui/material/Toolbar';
import React from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';

function Appbar() {
  return (
    <AppBar position="static" style={{backgroundColor:"white",height:"76px"}}>
        <Toolbar style={{alignContent:"center",top:"10px"}}>
            <img src="https://preview.colorlib.com/theme/ogani/img/logo.png" />
            <h2 style={{color:"black",marginLeft:"292px",fontSize:"15px"}}><Link
          
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          style={{color:"black",textDecoration:"none",fontSize:"15px"}}
        >     Home
        </Link></h2>
           <h2 style={{color:"black",marginLeft:"92px",fontSize:"15px"}}><Link
          
          to="/shop"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          style={{color:"black",textDecoration:"none",fontSize:"15px"}}
        >     SHOP
        </Link></h2>
           <h2 style={{color:"black",marginLeft:"92px",fontSize:"15px"}}><Link
          
          to="/checkout"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          style={{color:"black",textDecoration:"none",fontSize:"14px"}}
        >     CHECKOUT
        </Link></h2>
           <h2 style={{color:"black",marginLeft:"92px",fontSize:"15px"}}>
<Link
          
          to="/Blog"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          style={{color:"black",textDecoration:"none",fontSize:"14px"}}
        >     BLOG
        </Link>

           </h2>
           <h2 style={{color:"black",marginLeft:"92px",fontSize:"15px"}}>
           <Link
          
          to="/Contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          style={{color:"black",textDecoration:"none",fontSize:"14px"}}
        >     CONTACT
        </Link>
            
            </h2>   
           <ShoppingBagIcon style={{color:"black",marginLeft:"192px"}}/>  
           <FavoriteIcon style={{color:"black",marginLeft:"15px"}}/>  
           <div>
            <p style={{color:"black",marginLeft:"18px"}}>items:$ 150.00</p>
           </div>

        </Toolbar>
      </AppBar>
  )
}

export default Appbar