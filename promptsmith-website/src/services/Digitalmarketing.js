import { Typography } from '@mui/material'
import React from 'react'
import { Helmet } from 'react-helmet'

function Digitalmarketing() {
  return (
    <div>
       <Helmet>
        <title>Digital Marketing || PromptSmith</title>
        <meta name="Author" content="" />
        <meta name="Description" content=""/>
        <meta name="keyword" content="" />
      </Helmet>
      <div className='Services'>
        <div className='section'>
            <Typography variant="h2" component="h2" > Digital</Typography>
            <Typography variant="h2" component="h2" color="primary"  sx={{ml:2}}>Marketing</Typography>
        </div>
      </div>
    </div>
    
  )
}

export default Digitalmarketing
