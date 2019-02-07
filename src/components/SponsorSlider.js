import React from 'react'

import googlePNG from '../assets/images/supporters/google.png'
import githubPNG from '../assets/images/supporters/github.png'
import replItPNG from '../assets/images/supporters/repl.it.png'
import slackPNG from '../assets/images/supporters/slack.png'
import doPNG from '../assets/images/supporters/DO.png'
import femPNG from '../assets/images/supporters/fem.png'
import comcastPNG from '../assets/images/supporters/comcast.png'


let SponsorLink = ({route, image, alt , height = 60, width = 60, ...props}) => 
    <a href={`${route}`} target="_blank" rel="noopener noreferrer">
      <img src={image} alt={`${alt}`} height={height} width={width} />
    </a>



const SponsorSlider = () => (
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <SponsorLink route={"https://www.google.com/"} image={googlePNG} alt={"google"}/>
      <SponsorLink route={"https://github.com/"} image={githubPNG} alt={"GitHub"}/>
      <SponsorLink route={"https://repl.it"} image={replItPNG} alt={"repl.it"}/>
      <SponsorLink route={"https://slack.com/"} image={slackPNG} alt={"slack"}/>
      <SponsorLink route={"https://www.digitalocean.com/"} image={doPNG} alt={"Digital Ocean"}/>
      <SponsorLink route={"https://frontendmasters.com/"} image={femPNG} alt={"Front End Masters"}/>
      <SponsorLink route={"https://corporate.comcast.com/company/nbcuniversal/"} image={comcastPNG} alt={"Comcast"} width={80}/>
</div>
)

export default SponsorSlider
