import React from 'react';
import Appbar from './Appbar';
import CallIcon from '@mui/icons-material/Call';
import PlaceIcon from '@mui/icons-material/Place';
import ScheduleIcon from '@mui/icons-material/Schedule';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Button, TextField } from '@mui/material';


function Contact() {
  return (
    <div>
      <Appbar />
      <div style={{display:"flex"}}>
        <div style={{marginLeft:"234px"}}>
        <CallIcon style={{ color: "green", fontSize: 50 ,marginLeft:"15px",marginTop:"52px"}} /> {/* Change fontSize to the desired size */}
      <h1>Phone</h1>
      <p>+01-3-8888-6868</p>

        </div>
        <div style={{marginLeft:"134px"}}>
        <PlaceIcon style={{ color: "green", fontSize: 50 ,marginLeft:"30px",marginTop:"52px"}} /> {/* Change fontSize to the desired size */}
      <h1 style={{marginLeft:"12px"}} >Address</h1>
      <p >60-49 Road 11378 New York</p>

        </div>
        <div style={{marginLeft:"134px"}}>
        <ScheduleIcon style={{ color: "green", fontSize: 50 ,marginLeft:"35px",marginTop:"52px"}} /> {/* Change fontSize to the desired size */}
      <h1>Open time</h1>
      <p>10:00 am to 23:00 pm</p>

        </div>
        <div style={{marginLeft:"134px"}}>
        <MailOutlineIcon style={{ color: "green", fontSize: 50 ,marginLeft:"15px",marginTop:"52px"}} /> {/* Change fontSize to the desired size */}
      <h1>Email</h1>
      <p>hello@colorlib.com</p>

        </div>
      </div>
      <br/>
      <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95440.10386994263!2d-88.30862343967011!3d41.62325252893028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880ef4f4bc37a549%3A0x146344e09a792fb9!2sPlainfield%2C%20IL!5e0!3m2!1sen!2sus!4v1714483792912!5m2!1sen!2sus" width="100%" height="450"  allowfullscreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <br/>
      <h1 style={{textAlign:"center"}}>Leave Message</h1>
<div>

<div style={{display:"flex"}}>
      <div style={{marginLeft:"323px"}}>
      <p style={{fontSize:"23px"}}>Your name</p>
    <TextField
          // id="outlined-size-small"
          size="small"
          style={{width:"423px"}}
        />
      </div>
      <div style={{marginLeft:"23px"}}>
      <p style={{fontSize:"23px"}}>Email</p>
    <TextField
          // id="outlined-size-small"
          size="small"
          style={{width:"423px"}}
        />  
      </div>
      
    </div>
    <br/>
    <p style={{fontSize:"23px",marginLeft:"315px"}}>Message</p>

    <TextField
          // id="outlined-size-small"
          style={{width:"870px",marginLeft:"315px"}}
        />
        <br/><br/> <br/><br/>
        <Button variant="contained"  style={{width:"223px",height:"54px",backgroundColor:"#7fad39",marginLeft:"623px"}}>SEND MESSAGE</Button>
        <br/><br/><br/>
        <br/>

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
   
    </div>
  );
}

export default Contact;
