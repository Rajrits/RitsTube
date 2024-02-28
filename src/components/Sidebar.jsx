import React from 'react'
import { Stack } from '@mui/material'
import { categories } from '../utils/Constants'

const Sidebar = ({selectedCategory,setSelectedCategory}) => {
   
  return (
    <div>
        <Stack
        direction={ "row"}
        sx={{
             height :{sx:'auto',md:"100%"},
             flexDirection:{md:'column'}}}>
        {categories.map((category)=>{
        return (<button className='category-btn'
        onClick={()=>setSelectedCategory(category.name)}
        style={{background:category.name === selectedCategory && '#FC1503',
        color: "white"}}
        key={category.name}>
            <span style={{color:category.name === selectedCategory ? 'white':'red', marginRight:"15px"}}>{category.icon}</span>
            <span></span>
            <span style={{letterSpacing:'1.5px',fontSize:"18px" }}>{category.name}</span>
        </button>

        )
        })}
        </Stack>
      
    </div>
  )
}

export default Sidebar
