import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

export default function MediaControlCard2() {
  const theme = useTheme();

  return (
    <div>
          <Card sx={{ display: 'flex' ,width:"223px"}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Fruit
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            $12345
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        1wqgtrfy
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://preview.colorlib.com/theme/ogani/img/categories/cat-2.jpg.webp"
        alt="Live from space album cover"
      />
    </Card>
    <br/><br/>
    <Card sx={{ display: 'flex',width:"223px" }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Fruit
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            $12345
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        1wqgtrfy
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://preview.colorlib.com/theme/ogani/img/categories/cat-4.jpg.webp"
        alt="Live from space album cover"
      />
    </Card>
    <br/><br/>
    <Card sx={{ display: 'flex',width:"223px" }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Fruit
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            $12345
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        1wqgtrfy
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://preview.colorlib.com/theme/ogani/img/categories/cat-3.jpg.webp"
        alt="Live from space album cover"
      />
    </Card>
    </div>
  
  );
}
