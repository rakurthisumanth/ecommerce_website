import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://preview.colorlib.com/theme/ogani/img/categories/cat-1.jpg.webp',
  },
  {
    label: 'Bird',
    imgPath:
      'https://preview.colorlib.com/theme/ogani/img/categories/cat-2.jpg.webp',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://preview.colorlib.com/theme/ogani/img/categories/cat-3.jpg.webp',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://preview.colorlib.com/theme/ogani/img/categories/cat-4.jpg.webp',
  },
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://preview.colorlib.com/theme/ogani/img/categories/cat-5.jpg.webp',
  },
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://preview.colorlib.com/theme/ogani/img/categories/cat-1.jpg.webp',
  },
  {
    label: 'Bird',
    imgPath:
      'https://preview.colorlib.com/theme/ogani/img/categories/cat-2.jpg.webp',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://preview.colorlib.com/theme/ogani/img/categories/cat-3.jpg.webp',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://preview.colorlib.com/theme/ogani/img/categories/cat-4.jpg.webp',
  },
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://preview.colorlib.com/theme/ogani/img/categories/cat-5.jpg.webp',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://preview.colorlib.com/theme/ogani/img/categories/cat-1.jpg.webp',
  },{
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://preview.colorlib.com/theme/ogani/img/categories/cat-2.jpg.webp',
  }
];

function Sliderdisplay() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = Math.ceil(images.length / 4); // Calculate number of steps based on number of images

  const handleNext = () => {
    setActiveStep((prevActiveStep) => Math.min(prevActiveStep + 1, maxSteps - 1));
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        style={{ maxWidth: 1200, width: '100%' }}
      >
        {[...Array(maxSteps)].map((_, stepIndex) => (
          <div key={stepIndex} style={{ display: 'flex', justifyContent: 'center' }}>
            {images.slice(stepIndex * 4, stepIndex * 4 + 4).map((step, index) => (
              <Box key={index} sx={{ p: 1 }}>
                <img
                  src={step.imgPath}
                  alt={step.label}
                  style={{ width: '100%', height: 'auto', maxWidth: '100%', maxHeight: '400px' }} // Adjust width and height here
                />
              </Box>
            ))}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default Sliderdisplay;
