import { Typography } from '@mui/material'
import React from 'react'
import { Helmet } from 'react-helmet'

function Erpdevlopment() {
  return (
    <div>
       <Helmet>
        <title>Erp Development || PromptSmith</title>
        <meta name="Author" content="" />
        <meta name="Description" content=""/>
        <meta name="keyword" content="" />
      </Helmet>
      <div className='Services'>
        <div className='section'>
            <Typography variant="h2" component="h2" > ERP - Enterprise Resource </Typography>
            <Typography variant="h2" component="h2" color="primary"  sx={{ml:2}}>Planning</Typography>
        </div>
      </div>
    </div>
  )
}

export default Erpdevlopment
