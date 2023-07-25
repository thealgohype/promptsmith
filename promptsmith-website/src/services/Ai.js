import { Typography } from '@mui/material'
import React from 'react'
import { Helmet } from 'react-helmet'
import Aiimg from '../Assests/Ai.jpg'
import '../css/services.css'

function Ai() {
  return (
    <div>
       <Helmet>
        <title>AI || PromptSmith</title>
        <meta name="Author" content="" />
        <meta name="Description" content=""/>
        <meta name="keyword" content="" />
      </Helmet>
      <div className='Services'>
        <div className='section sec'>
            <Typography variant="h2" component="h2" > Artificial </Typography>
            <Typography variant="h2" component="h2" color="primary"  sx={{ml:2}}>Intelligence</Typography>
        </div>

         {/* service data construct */}

        <div className='service-content'>

          {/* this is the first container */}
          <div className='service-data'>
            <img src={Aiimg} alt="Ai file" className='images'/>
            <div className='service-rows-data'>
              <Typography variant="h3" component="h3"sx={{color:"blue"}}>
                Artificial Intelligence
              </Typography>
            <Typography variant="p" component="p" className='para-service1'>
             Businesses are continuously challenged to do more with less — and content is a great way to drive brand awareness and acquire leads. However, scaling a business’ content output without using more resources is nearly impossible.
            </Typography>  
            <Typography variant="p" component="p" className='para-service1'>
          With HubSpot’s free AI writer, businesses can generate copy for many programs and channels in no time. Enter a prompt or topic and watch HubSpot's content assistant tools generate a first draft for your next prospecting email, landing page, social caption, or blog post.
          </Typography>
            </div>
          </div>

           {/* this is the second container */}
          <div className='service-data'> 
          <div className='service-rows-data'>
              <Typography variant="h3" component="h3" sx={{color:"blue"}}>
                Artificial Intelligence
              </Typography>
          <Typography variant="p" component="p" className='para-service2'>
         Businesses are continuously challenged to do more with less — and content is a great way to drive brand awareness and acquire leads. However, scaling a business’ content output without using more resources is nearly impossible.
          </Typography> 
          <Typography variant="p" component="p" className='para-service2'>
          With HubSpot’s free AI writer, businesses can generate copy for many programs and channels in no time. Enter a prompt or topic and watch HubSpot's content assistant tools generate a first draft for your next prospecting email, landing page, social caption, or blog post.
          </Typography>
          </div>
          <img src={Aiimg} alt="Ai file" className='images' />
          </div>

             {/* this is the third container */}
          <div className='service-data'>
          <img src={Aiimg} alt="Ai file" className='images' />
          <div className='service-rows-data'>
              <Typography variant="h3" component="h3" sx={{color:"blue"}}>
                Artificial Intelligence
              </Typography>
          <Typography variant="p" component="p" className='para-service1'>   
           Businesses are continuously challenged to do more with less — and content is a great way to drive brand awareness and acquire leads. However, scaling a business’ content output without using more resources is nearly impossible.
            </Typography>
            <Typography variant="p" component="p" className='para-service1'>
          With HubSpot’s free AI writer, businesses can generate copy for many programs and channels in no time. Enter a prompt or topic and watch HubSpot's content assistant tools generate a first draft for your next prospecting email, landing page, social caption, or blog post.
          </Typography>
          </div>
          </div>
             {/* this is the forth container */}
          <div className='service-data'>
          <div className='service-rows-data'>
              <Typography variant="h3" component="h3" sx={{color:"blue"}}>
                Artificial Intelligence
              </Typography>
          <Typography variant="p" component="p" className='para-service2'>
         Businesses are continuously challenged to do more with less — and content is a great way to drive brand awareness and acquire leads. However, scaling a business’ content output without using more resources is nearly impossible.
          </Typography>
          <Typography variant="p" component="p" className='para-service2'>
          With HubSpot’s free AI writer, businesses can generate copy for many programs and channels in no time. Enter a prompt or topic and watch HubSpot's content assistant tools generate a first draft for your next prospecting email, landing page, social caption, or blog post.
          </Typography>
        </div>
          <img src={Aiimg} alt="Ai file" className='images'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ai
