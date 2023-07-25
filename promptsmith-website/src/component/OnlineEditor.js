import React, { useState } from 'react'
import {Button, TextField, Typography} from '@mui/material'

import '../css/editor.css'
import { Helmet } from 'react-helmet'

function OnlineEditor() {
  const llm = ['CHATGPT', 'MIDJOURNEY','GOOGLE BARD','STABLE DIFFUSION'] 
  const content = ['BLOG','POLICY','NEWSLETTER','PROPOSAL','RESUME','SCRIPT','CASESTUDY','PRESSRELEASE','ADCOPY','DOCUMENT','PROFILE']
  const theam = ['NEUTRAL','PLAYFULL','EMPATHETIC','CRITICLE','URGENT','DRAMA','INSPERATIONAL','FUNNY','HUMOROUS','POETIC','AUTHORITATIVE']
  const length = ['Large','Small']
  const [llms, setllms] = useState('')
  const [contents,setcontents]=useState('')
  const [theams,settheams]=useState('')
  const [lengths,setlength]=useState('')
  const changingvalue = (event) =>
  {
    setllms(event.target.value)
    setcontents(event.target.value)
    settheams(event.target.value)
    setlength(event.target.value)
    setlength(event.target.value)
  }

  return (
    <div className='prompt-smith'>
       <Helmet>
        <title>PromptSmith Online Editor</title>
        <meta name="Author" content="" />
        <meta name="Description" content=""/>
        <meta name="keyword" content="" />
      </Helmet>

      <div className='section-data'>
      <div className='section'>
          <Typography variant="h2" component="h2" > Prompt Smith</Typography>
          <Typography variant="h2" component="h2" color="primary"  sx={{ml:2}}>Online</Typography>
      </div>
      <div>
        <p className='prompt-content'>
        To use the font Icon component or the prebuilt SVG Material Icons (such as those found in the icon demos), you must first install the Material Icons font. You can do so with npm or yarn, or with the Google Web Fonts CDN.
        </p>
      </div>
      <div className='prompt-button-start'>
        <Button type="submit" variant="contained" sx={{bgcolor:'black',borderRadius:'20px'}} className="button-prompt">Get Started For Free</Button>
        <Button type="reset" variant="outlined" sx={{ml:4,borderRadius:'20px'}} className="button-prompt">Prompt Experts</Button>
      </div>
      </div>
      <div className='prompt-data'>
     <div>
     <Typography variant='h6' className='headings'>
      Input
    </Typography>
        <TextField placeholder='Prompt Input' className='prompt-text' multiline={true}/><br />
        <Typography variant='p' className='p'>
      Input that Assist AI to give best prompts
    </Typography>
     </div>
      <div className='prompt-data-field'>
        <Typography variant='h6' >
      Choose An LLM
    </Typography>
        <select className='select' value={llms} onChange={changingvalue} >
   {
      llm.map((llm)=><option className='options' value={llm}>{llm}</option>)
    }
 </select>    
      </div>
 <div className='prompt-data-field'>
 <Typography variant='h6' >
      Content
    </Typography>
   <select className='select' value={contents} onChange={changingvalue}>
   {
      content.map((content)=><option className='options' value={content}>{content}</option>)
   }
   </select>
 </div>
 <div className='prompt-data-field'>
   <Typography variant='h6' >
      Theam
    </Typography>
   <select className='select' value={theams} onChange={changingvalue}>
   {
      theam.map((theam)=><option className='options' value={theam}>{theam}</option>)
    }
    </select>
 </div>
    <div className='prompt-data-field'>
    <Typography variant='h6' >
      Length
    </Typography>
   <select className='select' value={lengths} onChange={changingvalue}>
   {
      length.map((length)=><option className='options' value={length}>{length}</option>)
    }
   </select>
</div>
<div className='prompt-button'>
  <Button type="submit" variant="contained" sx={{bgcolor:'black'}}>Submit</Button>
  <Button type="reset" variant="outlined" sx={{ml:4}}>Reset</Button>
</div>
   </div>
<div className='prompt-data' >
<div className='prompt-example'>
  <Typography variant="h5" component="h5">Prompt: </Typography>
  <Typography variant="h6" component="h6" sx={{ml:1}}>write an intro paragraph to a mystery novel</Typography>
</div>
<div className='prompt-example'>
<Typography variant="h5" component="h5">Answer: </Typography>
<Typography variant="p" component="p" className='prompt-para' sx={{ml:1}}>
It was a dark and stormy night when the body was found. The small town of Millfield was in shock as the
news spread that one of their own, local businessman, had been murdered in cold blood. The police were at
a loss for leads and the residents of the town were on edge. But one person, a young and ambitious
reporter, was determined to uncover the truth and find the killer. Little did she know, this case would
lead her down a treacherous path of lies, deception, and hidden secrets that would shake the very
foundations of the town. As she delves deeper into the investigation, she begins to realize that nothing
is as it seems and that the killer may be closer than she ever imagined.
</Typography>
</div>
</div>
<div className='what-prompt'>
<div className='section'>
     <Typography variant="h2" component="h2" >What is</Typography>
     <Typography variant="h2" component="h2" color="primary"  sx={{ml:2,mb:2}}>Prompt</Typography>
</div>
  <Typography variant="p" component="p" className='prompt-p'>An AI prompt generator is a tool that uses natural language processing and machine learning algorithms to generate prompts for AI tools like ChatGPT developed by OpenAI. A prompt is simply a starting point or an idea that helps kickstart your project. It can be a word, a phrase, or a question that inspires you to create something unique with the help of artificial intelligence.</Typography>
  <Typography variant="p" component="p" className='prompt-p'>The AI prompt generator can create prompts based on different criteria, such as type of the project, genre, tone, style, length, or even specific keywords or concepts. For example, if you’re working on a business project and need to generate some marketing copy, you could input your target audience, product features, and desired tone into the AI prompt generator.</Typography>
</div>
<div className='what-prompt'>
<div className='section'>
     <Typography variant="h2" component="h2" >Why Use</Typography>
     <Typography variant="h2" component="h2" color="primary"  sx={{ml:2,mb:2}}>Prompt</Typography>
</div>
  <Typography variant="p" component="p" className='prompt-p'>The purpose of a Prompt Personality is to guide future AIs in emulating a writing style. Your output can therefore include highly specific and scientific language, emojis, shorthand, and concepts that only linguistics and writing specialists and AIs would understand.</Typography>
  <Typography variant="p" component="p" className='prompt-p'>A digital writing style fingerprint consisting of lexical, syntatic, structure, and idiosyncratic features. A writeprint includes a description of the tone, register, style, and attitude of a written text. It may factor in use of creativity, humor, and use of figurative language. It may evaluate perplexity and burstiness.</Typography>
    <div className='prompt-points'>
     <ul>
      <li className='prompt-point'>An Action to take</li>
      <li className='prompt-point'>Steps to perform the action</li>
      <li className='prompt-point'>A Persona to emulate</li>
      <li className='prompt-point'>Examples of inputs and/or outputs</li>
      <li className='prompt-point'>Context about the action and situation</li>
      <li className='prompt-point'>Constraints and what not to do</li>
      <li className='prompt-point'>A Template or desired format for the output </li>
      <li className='prompt-point'>Name your AI and evoke its name in the instructions</li>
      <li className='prompt-point'>Give me three options. If I choose a number, expand on that option</li>
     </ul>
    </div>
</div>
    </div>
  )
}

export default OnlineEditor
