import { Typography } from '@mui/material'
import React from 'react'
import { Helmet } from 'react-helmet'

function Webdevelopment() {
  return (
    <div>
       <Helmet>
        <title>Web Developemt || PromptSmith</title>
        <meta name="Author" content="" />
        <meta name="Description" content=""/>
        <meta name="keyword" content="" />
      </Helmet>
      <div className='Services'>
        <div className='section'>
            <Typography variant="h2" component="h2" >Web </Typography>
            <Typography variant="h2" component="h2" color="primary"  sx={{ml:2}}>Development</Typography>
        </div>
        <div>
          <Typography variant="p" component="p">
            {/* We offer web development services to businesses of all sizes. Whether you need a simple website. */}
          </Typography>
        </div>
        <div className='service-content'>
          <div className='service data'>
            
          </div>
          <div className='service data'>

          </div>
          <div className='service data'>

          </div>
          <div className='service data'>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Webdevelopment
