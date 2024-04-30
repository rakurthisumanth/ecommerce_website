import React from 'react';
import Appbar from './Appbar';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Button, Paper, TextField } from '@mui/material';
import MediaControlCard from './Card';
import Fab from '@mui/material/Fab';
import DateRangeIcon from '@mui/icons-material/DateRange';

function Shop() {
  // Sample image URLs for demonstration
  const imageUrls = [
    'https://preview.colorlib.com/theme/ogani/img/blog/blog-1.jpg.webp',
    'https://preview.colorlib.com/theme/ogani/img/blog/blog-2.jpg.webp',
    'https://preview.colorlib.com/theme/ogani/img/blog/blog-3.jpg.webp',
    'https://preview.colorlib.com/theme/ogani/img/blog/blog-4.jpg.webp',
    'https://preview.colorlib.com/theme/ogani/img/blog/blog-5.jpg.webp',
    'https://preview.colorlib.com/theme/ogani/img/blog/blog-6.jpg.webp',
    'https://preview.colorlib.com/theme/ogani/img/blog/blog-1.jpg.webp',
    'https://preview.colorlib.com/theme/ogani/img/blog/blog-5.jpg.webp',
    
    // Add more image URLs here...
  ];

  // Function to render a single image card
  const renderImageCard = (url, date, title, description) => (
    <div style={{ marginRight: '20px', marginBottom: '20px' }}>
      <img src={url} alt="Blog" />
      <p>
        <DateRangeIcon /> {date}
      </p>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );

  // Function to render a pair of image cards
  const renderImagePair = (startIndex) => {
    return (
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        {renderImageCard(imageUrls[startIndex], 'May 4, 2019', 'Cooking tips make cooking simple', 'Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat')}
        {renderImageCard(imageUrls[startIndex + 1], 'May 4, 2019', '6 ways to prepare breakfast for 30', 'Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat')}
      </div>
    );
  };

  return (
    <div>
      <Appbar />
      <div style={{ marginLeft: "93px", display: "flex" }}>
        <div>
          <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            style={{ margin: "20px" }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search...."
              inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
          <div style={{ margin: "20px" }}>
            <h1 >Categories</h1>
            <p>All</p>
            <p>Beauty (20)</p>
            <p>Food (5)</p>
            <p>Life Style (9)</p>
            <p>Travel (10)</p>
          </div>
          <br />
          <h1>Recent News</h1>
          <MediaControlCard />
          <br />
          <h1>Search By</h1>
          <br />
          <Fab variant="extended" size="medium" color="success">
            Apple
          </Fab>
          <Fab variant="extended" size="medium" color="success" style={{ marginLeft: "12px" }}>
            Beauty
          </Fab>
          <Fab variant="extended" size="medium" color="success" style={{ marginLeft: "12px" }}>
            Veges
          </Fab>
          <div style={{ marginTop: "12px" }}>
            <Fab variant="extended" size="medium" color="success">
              Apple
            </Fab>
            <Fab variant="extended" size="medium" color="success" style={{ marginLeft: "12px" }}>
              Beauty
            </Fab>
            <Fab variant="extended" size="medium" color="success" style={{ marginLeft: "12px" }}>
              Veges
            </Fab>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", margin: "33px" }}>
          {renderImagePair(0)}
          {renderImagePair(2)}
          {renderImagePair(4)}
          {renderImagePair(6)}
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
  );
}

export default Shop;
