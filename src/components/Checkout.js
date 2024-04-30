import React from 'react'
import Appbar from './Appbar'
import { Button, TextField } from '@mui/material'
import Checkbox from '@mui/material/Checkbox';

function Checkout() {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <div>
    <Appbar/>
    <div style={{display:"flex"}}>
    <div style={{marginLeft:"54px"}}>
    <h2 style={{marginLeft:"24px"}}>Billing Details</h2>
    <hr/>
    <div style={{display:"flex"}}>
      <div>
      <p style={{fontSize:"23px"}}>Fist Name*</p>
    <TextField
          // id="outlined-size-small"
          size="small"
          style={{width:"423px"}}
        />
      </div>
      <div style={{marginLeft:"23px"}}>
      <p style={{fontSize:"23px"}}>Last Name*</p>
    <TextField
          // id="outlined-size-small"
          size="small"
          style={{width:"423px"}}
        />  
      </div>
    </div>
    <p style={{fontSize:"23px"}}>Country*</p>
    <TextField
          // id="outlined-size-small"
          size="small"
          style={{width:"870px"}}
        />
         <p style={{fontSize:"23px"}}>Address*</p>
    <TextField
          // id="outlined-size-small"
          size="small"
          style={{width:"870px"}}
        />
        <br/>        <br/>
        <br/>

         <TextField
          // id="outlined-size-small"
          size="small"
          style={{width:"870px"}}
        />
            <div style={{display:"flex"}}>
      <div>
      <p style={{fontSize:"23px"}}>Phone*</p>
    <TextField
          // id="outlined-size-small"
          size="small"
          style={{width:"423px"}}
        />
      </div>
      <div style={{marginLeft:"23px"}}>
      <p style={{fontSize:"23px"}}>Email*</p>
    <TextField
          // id="outlined-size-small"
          size="small"
          style={{width:"423px"}}
        />  
      </div>
    </div>
    <p style={{fontSize:"23px"}}>Country/State*</p>
    <TextField
          // id="outlined-size-small"
          size="small"
          style={{width:"870px"}}
        />
        <p style={{fontSize:"23px"}}>Postcode / ZIP*</p>
    <TextField
          // id="outlined-size-small"
          size="small"
          style={{width:"870px"}}
        />
    </div>

    <div style={{backgroundColor:"#f5f5f5",height:"823px",width:"423px",margin:"53px"}}>
      <h1 style={{marginLeft:"52px"}}>Your Order</h1>
      <hr/>
      <div style={{display:"flex"}}>
      <h2 style={{marginLeft:"52px"}}>Products</h2>
      <h2 style={{marginLeft:"172px"}}>Total</h2>
      </div>
      <div style={{display:"flex"}}>
      <p style={{marginLeft:"52px"}}>Vegetable’s Package</p>
      <p style={{marginLeft:"132px"}}>$75.99</p>
      </div>
      <div style={{display:"flex"}}>
      <p style={{marginLeft:"52px"}}>Fresh Vegetable</p>
      <p style={{marginLeft:"162px"}}>$75.99</p>
      </div>
      <div style={{display:"flex"}}>
      <p style={{marginLeft:"52px"}}>Organic Bananas</p>
      <p style={{marginLeft:"160px"}}>$75.99</p>
      </div>
    <hr/>
    <div style={{display:"flex"}}>
      <h2 style={{marginLeft:"52px"}}>Subtotal</h2>
      <h2 style={{marginLeft:"160px"}}>$750.99</h2>
      </div>
      <hr/>
      <div style={{display:"flex"}}>
      <h2 style={{marginLeft:"52px"}}>Total</h2>
      <h2 style={{marginLeft:"190px",color:"red"}}>$750.99</h2>
      </div>
      <hr/>
      <div style={{display:"flex"}}>
      <Checkbox {...label} defaultChecked  style={{marginLeft:"42px"}}/><p>Create an account?</p>
      </div>
      <p style={{marginLeft:"32px"}}>Lorem ipsum dolor sit amet, consectetur adip elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
      <div style={{display:"flex"}}>
      <Checkbox {...label} defaultChecked  style={{marginLeft:"42px"}}/><p>Check Payment</p>
      </div><div style={{display:"flex"}}>
      <Checkbox {...label} defaultChecked  style={{marginLeft:"42px"}}/><p>Paypal</p>
      </div>
    
      <Button variant="contained"  style={{width:"423px",height:"54px",backgroundColor:"#7fad39"}}>PLACE ORDER</Button>

    </div>
   
    </div>
    <div style={{display:"flex"}}>
      <Checkbox {...label} defaultChecked  style={{marginLeft:"42px"}}/><p>Create an account?</p>
       </div>
       <p style={{marginLeft:"62px"}}>Create an account by entering the information below. If you are a returning customer please login at the top of<br/> the page</p>
       <h6 style={{fontSize:"23px",marginLeft:"62px"}}>Postcode / ZIP*</h6>
       <TextField
          // id="outlined-size-small"
          size="small"
          style={{width:"870px",marginLeft:"62px"}}
        />
        <br/><br/>
         <div style={{display:"flex"}}>
      <Checkbox {...label} defaultChecked  style={{marginLeft:"42px"}}/><p>Ship to a different address?</p>
       </div>
       <p style={{marginLeft:"62px"}}>Create an account by entering the information below. If you are a returning customer please login at the top of<br/> the page</p>
       <h6 style={{fontSize:"23px",marginLeft:"62px"}}>Order notes*</h6>
       <TextField
          // id="outlined-size-small"
          size="small"
          style={{width:"870px",marginLeft:"62px"}}
        />

<br/><br/><br/>

<div style={{display:"flex",backgroundColor:"#F3F6F9"}}>
  <div style={{marginLeft:"128px"}}>
  <img src="https://preview.colorlib.com/theme/ogani/img/logo.png" />
  <p>Address: 60-49 Road 11378 New York</p>
  <p>Phone: +65 11.188.888</p>
  <p>Email: hello@colorlib.com</p>
  </div>
  <div style={{marginLeft:"200px"}}>
    <h3>Useful Links</h3>
    <p>About Us</p>
    <p>About Our Shop</p>
    <p>Secure Shopping</p>
    <p>Delivery infomation</p>
    <p>Privacy Policy</p>
    <p>Our Sitemap</p>
  </div>
  <div style={{marginLeft:"140px"}}>
    <h3>Join Our Newsletter Now</h3>
    <p>Get E-mail updates about our latest shop and special offers.</p>
    <TextField id="outlined-search" label="Search field" type="search"  style={{width:"423px"}}/>
        <Button variant="contained"  style={{width:"90px",height:"54px",backgroundColor:"#7fad39"}}>
        Search
      </Button>
  </div>
</div>

       

    </div>
  )
}

export default Checkout