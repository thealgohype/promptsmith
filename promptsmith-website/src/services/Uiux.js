import { Typography } from '@mui/material'
import React from 'react'
import { Helmet } from 'react-helmet'

function Uiux() {
  return (
    <div>
       <Helmet>
        <title>UI/UX || PromptSmith</title>
        <meta name="Author" content="" />
        <meta name="Description" content=""/>
        <meta name="keyword" content="" />
      </Helmet>
      <div className='Services'>
        <div className='section'>
            <Typography variant="h2" component="h2" >UI /</Typography>
            <Typography variant="h2" component="h2" color="primary"  sx={{ml:2}}>UX</Typography>
        </div>
      </div>
    </div>
  )
}

export default Uiux
