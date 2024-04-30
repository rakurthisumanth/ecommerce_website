import React from 'react'
import Appbar from './Appbar'
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Sliderdisplay from './Sliderdisplay';
import BasicTabs from './Tabs';
import MediaControlCard from './Card';
import MediaControlCard2 from './Card2';
import DateRangeIcon from '@mui/icons-material/DateRange';

function Home() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <div>
        <Appbar/>
        <br/>
        <div style={{display:"flex"}}>
          <div>
          <Card style={{backgroundColor:"#7fad39",width:"400px",height:"53px"}}>
          <div>
          </div><h2 style={{backgroundColor:"#7fad39",fontSize:"15px",color:"white",textAlign:"center"}}>All departments</h2>
          </Card>
          <Card style={{width:"400px",textAlign:"center"}}>
            <p>Fresh Meat</p>
            <p>Vegetables</p>
            <p>Fruit &amp; Nut Gifts</p>
            <p>Fresh Berries</p>
            <p>Ocean Foods</p>
            <p>Butter &amp; Eggs</p>
            <p>Fastfood</p>
            <p>Fresh Onion</p>
            <p>Papayaya &amp; Crisps</p>
            <p>Oatmeal</p>
            <p>Fresh Bananas</p>
            <p>Vegetables</p>
            <p>Fruit &amp; Nut Gifts</p>
            <p>Fresh Berries</p>

          </Card>
          </div>
         <div>
         <TextField id="outlined-search" label="Search field" type="search"  style={{width:"423px",marginLeft:"104px"}}/>
         <Button variant="contained"  style={{width:"123px",height:"54px",backgroundColor:"#7fad39"}}>
        Search
      </Button>
      <CallIcon style={{marginLeft:"92px"}}/> 7780569445 
      ..            support 24/7

      <div style={{marginLeft:"48px",marginTop:"22px"}}>
        <img src="https://preview.colorlib.com/theme/ogani/img/hero/banner.jpg.webp" style={{height:"500px"}}/>
        <div style={{ position: "absolute", top: "70%", left: "38%", transform: "translate(-50%, -50%)", color: "white", textAlign: "center",color:"black" }}>
              <h2 style={{color:"#7fad39"}}>Fruit Fresh</h2>
              <h2>Vegetables</h2>
              <h2>100% Organic</h2>
              <p>free pickup and Delivery Available</p>
              <Button variant="contained"  style={{width:"123px",height:"54px",backgroundColor:"#7fad39"}}>
        Shop Now
      </Button>
            </div>
      </div>

         </div>
        </div>
        <br/><br/>
    <Sliderdisplay/>
    <center><h1>Featured Product</h1></center>
    <BasicTabs/>
    <br/><br/>
    <div style={{  alignItems: 'center' }}>
        <img src="https://preview.colorlib.com/theme/ogani/img/banner/banner-1.jpg.webp" alt="Image 1" style={{marginLeft:"126px"}}/>
        <img src="https://preview.colorlib.com/theme/ogani/img/banner/banner-2.jpg.webp" alt="Image 2" style={{marginLeft:"26px"}} />
      </div>
      <br/><br/>
      <div>
  <div style={{display:"flex"}}>
    <div style={{marginLeft:"183px"}}>
    <h1>Latest Products</h1>
    <MediaControlCard/>
    </div>
    <div style={{marginLeft:"143px"}}>
    <h1>Top Rated Products</h1>
    <MediaControlCard2/>
    </div>
    <div style={{marginLeft:"123px"}}>
      <h1>Review Products</h1>
      <MediaControlCard/>
    </div>
  

    </div>
    <br/><br/>

    <h1 style={{textAlign:"center"}}>From The Blog</h1>
    <div style={{display:"flex"}}>
      <div style={{marginLeft:"143px"}}>
        <img src="https://preview.colorlib.com/theme/ogani/img/blog/blog-1.jpg.webp"/>
          <p><DateRangeIcon/> May 4,2019</p> 
          <h3>  Cooking tips make cooking simple</h3>
        <p>Sed quia non numquam modi tempora indunt ut <br/>labore et dolore magnam aliquam quaerat</p>
      </div>
      <div style={{marginLeft:"23px"}}>
        <img src="https://preview.colorlib.com/theme/ogani/img/blog/blog-2.jpg.webp"/>
        <p><DateRangeIcon/> May 4,2019</p> 
        <h3>6 ways to prepare breakfast for 30</h3>
        <p>Sed quia non numquam modi tempora indunt ut <br/>labore et dolore magnam aliquam quaerat</p>
      </div>
      <div style={{marginLeft:"23px"}}>
        <img src="https://preview.colorlib.com/theme/ogani/img/blog/blog-3.jpg.webp"/>
        <p><DateRangeIcon/> May 4,2019</p> 
        <h3>Visit the clean farm in the US</h3>
        <p>Sed quia non numquam modi tempora indunt ut <br/>labore et dolore magnam aliquam quaerat</p>
      </div>
    </div>
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
            <Button   variant="contained" color="success"  style={{width:"90px",height:"54px"}}>
            Search
          </Button>
      </div>
    </div>

        </div>

        </div>
  )
}

export default Home