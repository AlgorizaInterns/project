import React from 'react'
import {Slider} from '@material-ui/core'
import './Filters.css'
function Filters() {

  return (
    <div className='filters__container'>
        <h2 className='filters__container__title'>filters</h2>
        <div className='filters__container__list'>
            <p>Multi Range</p>
            <div className='list__multiRange'>
                <input type='radio' value='4'></input>
                <input type='radio' value='4'></input>
                <input type='radio' value='4'></input>
                <input type='radio' value='4'></input>
            </div>
            <p>Range</p>
            <div className='range__container'>
                <Slider
                    size="small"
                    defaultValue={70}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                />
            </div>
        </div>
    </div>
  )
}

export default Filters