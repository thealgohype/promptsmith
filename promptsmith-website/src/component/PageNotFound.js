import React from 'react'
import logo from '../Assests/logo.png'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
function PageNotFound() {
  return (
       <div className='home'>
         <Helmet>
        <title>Page Not Found PromptSmith </title>
        <meta name="Author" content="" />
        <meta name="Description" content=""/>
        <meta name="keyword" content="" />
      </Helmet>
      <figure>
      <img src={logo} alt="logo file" className='logo'/>
      <figcaption>The Bettter Understanding of Ai </figcaption>
      </figure>
     <Typography variant="h4" component="h4">Oops! We are Sorry, This page is not exsists.</Typography>
     <div className='prompt-additonals'>
   <Link to='/' className='links'>Visit Our Home Page</Link> <br/><br/>
   </div>
    </div>
  )
}

export default PageNotFound
