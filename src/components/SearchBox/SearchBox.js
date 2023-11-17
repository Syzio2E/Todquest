import React from 'react'
import classes from './SearchBox.module.css'
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = () => {
  return (
   <div className={classes.searchContainer}>
    <span><SearchIcon/></span>
    <input type='text' placeholder='Search For brand,category,coupon'  className={classes.searchText} />
   </div>
  )
}

export default SearchBox
