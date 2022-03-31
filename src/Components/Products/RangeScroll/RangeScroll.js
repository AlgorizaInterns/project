import React,{useState} from 'react'
import './RangeScroll.css'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
function valuetext(value) {
    return `${value}$`;
  }
  
export default function RangeScroll() {
const [value, setValue] = useState([0, 80]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className='range' >
        <label>Price Range</label>
      <Slider
        getAriaLabel={() => 'Price range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
}




  