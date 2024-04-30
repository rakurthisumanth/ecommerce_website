import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function MediaCard({ type }) {
  // Define different content based on the type prop
  let title, description, imageUrl;

  switch (type) {
    case 'all':
        const items = [
            { title: 'all items', description: 'This is all item from the all items category', imageUrl: 'https://preview.colorlib.com/theme/ogani/img/categories/cat-1.jpg.webp' },
            { title: 'all items', description: 'This is another item from the all items category', imageUrl: 'https://preview.colorlib.com/theme/ogani/img/categories/cat-2.jpg.webp' },
            { title: 'all items', description: 'This is another item from the all items category', imageUrl: 'https://preview.colorlib.com/theme/ogani/img/categories/cat-3.jpg.webp' },
            { title: 'all items', description: 'This is another item from the all items category', imageUrl: 'https://preview.colorlib.com/theme/ogani/img/categories/cat-5.jpg.webp' },
            { title: 'all items', description: 'This is another item from the all items category', imageUrl: 'https://preview.colorlib.com/theme/ogani/img/categories/cat-4.jpg.webp' },
            // Add more objects as needed
          ];
          const randomitems = items[Math.floor(Math.random() * items.length)];
          title = randomitems.title;
          description = randomitems.description;
          imageUrl = randomitems.imageUrl;
      break;
    case 'oranges':
        const orangeItems = [
            { title: 'Oranges', description: 'This is an item from the Oranges category', imageUrl: 'https://preview.colorlib.com/theme/ogani/img/categories/cat-1.jpg.webp' },
            { title: 'Oranges', description: 'This is another item from the Oranges category', imageUrl: 'https://preview.colorlib.com/theme/ogani/img/categories/cat-4.jpg.webp' },
            // Add more objects as needed
          ];
          const randomOrangeItem = orangeItems[Math.floor(Math.random() * orangeItems.length)];
          title = randomOrangeItem.title;
          description = randomOrangeItem.description;
          imageUrl = randomOrangeItem.imageUrl;
      break;
    case 'fresh meat':
        const meetItems = [
            { title: 'fresh meat', description: 'This is an item from the Oranges category', imageUrl: 'https://preview.colorlib.com/theme/ogani/img/categories/cat-5.jpg.webp' },
            { title: 'fresh meat', description: 'This is another item from the Oranges category', imageUrl: 'https://preview.colorlib.com/theme/ogani/img/categories/cat-5.jpg.webp' },
            // Add more objects as needed
          ];
          const randommeetItem = meetItems[Math.floor(Math.random() * meetItems.length)];
          title = randommeetItem.title;
          description = randommeetItem.description;
          imageUrl = randommeetItem.imageUrl;
      break;
    case 'vegetables':
        const vegItems = [
            { title: 'vegetables', description: 'This is an item from the Oranges category', imageUrl: 'https://preview.colorlib.com/theme/ogani/img/categories/cat-3.jpg.webp' },
            { title: 'vegetables', description: 'This is another item from the Oranges category', imageUrl: 'https://preview.colorlib.com/theme/ogani/img/categories/cat-3.jpg.webp' },
            // Add more objects as needed
          ];
          const randomvegItemsItem = vegItems[Math.floor(Math.random() * vegItems.length)];
          title = randomvegItemsItem.title;
          description = randomvegItemsItem.description;
          imageUrl = randomvegItemsItem.imageUrl;
      break;
    case 'fast food':
        const fastfood = [
            { title: 'fast food', description: 'This is an item from the Oranges category', imageUrl: 'https://preview.colorlib.com/theme/ogani/img/categories/cat-2.jpg.webp' },
            { title: 'fast food', description: 'This is another item from the Oranges category', imageUrl: 'https://preview.colorlib.com/theme/ogani/img/categories/cat-3.jpg.webp' },
            // Add more objects as needed
          ];
          const randomfastfoodItemsItem = fastfood[Math.floor(Math.random() * fastfood.length)];
          title = randomfastfoodItemsItem.title;
          description = randomfastfoodItemsItem.description;
          imageUrl = randomfastfoodItemsItem.imageUrl;
      break;
    default:
      title = 'Unknown';
      description = 'Unknown category';
      imageUrl = '';
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={imageUrl}
        alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
