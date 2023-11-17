import React from 'react'
import gridsImage from '../../assets/grid.png'
import Classes from './Grids.module.css'
import ScrollBar from '../ScrollBar/ScrollBar'

const Grids = () => {
  return (
    <div>
       <div className={Classes.grids}>
    <img src={gridsImage} alt='grid'/>
    </div>
    <ScrollBar/>
    </div>
  )
}

export default Grids
