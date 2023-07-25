import { Typography } from '@mui/material'
import React from 'react'
import { Helmet } from 'react-helmet'

function Appdelopment() {
  return (
    <div>
       <Helmet>
        <title>App Development || PromptSmith</title>
        <meta name="Author" content="" />
        <meta name="Description" content=""/>
        <meta name="keyword" content="" />
      </Helmet>
      <div className='Services'>
        <div className='section'>
            <Typography variant="h2" component="h2" > Application </Typography>
            <Typography variant="h2" component="h2" color="primary"  sx={{ml:2}}>Development</Typography>
        </div>
      </div>
    </div>
  )
}

export default Appdelopment
