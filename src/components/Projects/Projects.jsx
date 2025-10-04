import React from 'react'
import Card from '../Card/Card'
import mvr2 from "../../assets/mvr2.png"
import crp from "../../assets/crp.png"
import rag from "../../assets/rag.png"
import wa from "../../assets/wa.png"
import gw from "../../assets/gw.png"
import ise from "../../assets/ise.png"
import "./Projects.css"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
function Projects() {
useGSAP(()=>{
  gsap.from("#para",{
    y:100,
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger:{
      trigger:"#para",
      scroll:"body",
      scrub:2,
   
      start:"top 80%",
      end:"top 30%",

    }
  })
  gsap.from(".slider",{
    y:100,
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger:{
      trigger:".slider",
      scroll:"body",
      scrub:2,
   
      start:"top 80%",
      end:"top 30%",

    }
  })
   
})
  return (
    <div id="projects">

        <h1 id="para">Passionate Learner & Project Builder</h1>  
  <div className="slider">
<Card title="MOVIE RECOMMENDATION SYSTEM" image={mvr2} link="https://github.com/namrausman23/movies-recommender-system"/>
<Card title="CROP RECOMMENDATION SYSTEM" image={crp} link="https://github.com/namrausman23/-crop-recommendation-system"/>
<Card title="PDF RAG SYSTEM" image={rag} link="https://github.com/namrausman23/pdf-rag-system"/>
<Card title="WHATSAPP ANALYSIS SYSTEM" image={wa} link="https://github.com/namrausman23/whatsapp-chat-analysis"/>
<Card title="GROCERY WALLAH" image={gw} link="https://github.com/namrausman23/Grocery-Wallah"/>
  </div>
    </div>
  )
}

export default Projects
