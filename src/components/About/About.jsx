import React from 'react'
import "./About.css"
import Card from '../Card/Card'
import aiml from "../../assets/aiml.png"
import mern from "../../assets/mern.png"
import java from "../../assets/java.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
function About() {
  useGSAP(()=>{
    gsap.from(".circle",{
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".circle",
        scroll:"body",
        scrub:2,
     
        start:"top 60%",
        end:"top 30%",

      }
    })
      gsap.from(".line",{
        x:-100,
        duration:1,
        opacity:0,
        stagger:1,
        scrollTrigger:{
          trigger:".line",
          scroll:"body",
          scrub:2,
         
          start:"top 60%",
          end:"top 30%"
  
        } 
    })
    gsap.from(".aboutdetails h1",{
      x:-100,
      duration:1,
      opacity:0,
      stagger:1,
      scrollTrigger:{
        trigger:".aboutdetails h1",
        scroll:"body",
        scrub:2,
  
        start:"top 60%",
        end:"top 30%"

      }
  
  })
  gsap.from(".aboutdetails ul",{
    y:100,
    duration:1,
    opacity:0,
    stagger:1,
    scrollTrigger:{
      trigger:".aboutdetails ul",
      scroll:"body",
      scrub:2,
  
      start:"top 60%",
      end:"top 30%"

    }

})
gsap.from(".rightabout",{
  x:100,
  duration:1,
  opacity:0,
  stagger:1,
  scrollTrigger:{
    trigger:".rightabout",
    scroll:"body",
    scrub:2,
  
    start:"top 60%",
    end:"top 30%"

  }

})
})
  return (
    <div id="about">
<div className="leftabout">
<div className="circle-line">
  <div className="circle"></div>
  <div className="line"></div>
  <div className="circle"></div>
  <div className="line"></div>
  <div className="circle"></div>
</div>
<div className="aboutdetails">
  <div className="personalinfo">
    <h1>Personal Info</h1>
    <ul>
      <li>
<span>NAME</span> : NAMRA USMAN
      </li>
      <li>
<span>AGE</span> : 21 YEARS
      </li>
      <li>
<span>GENDER</span> : FEMALE
      </li>
      <li>
<span>LANGUAGE KNOWN</span> : HINDI, ENGLISH
      </li>
    </ul>
  </div>
  <div className="education">
    <h1>Education</h1>
    <ul>
      <li>
<span>DEGREE</span> : B-TECH
      </li>
      <li>
<span>BRANCH</span> : ELECTRONICS & COMMUNICATION ENGINEERING
      </li>
      <li>
<span>CGPA</span> : 8.24
      </li>
    </ul>
  </div>
  <div className="skills">
    <h1>Skills</h1>
    <ul>
      <li>
MACHINE LEARNING & AI
      </li>
      <li>
MERN STACK WEB DEVELOPER
      </li>
      <li>
JAVA
      </li>
    </ul>
  </div>
</div>
</div>
<div className="rightabout">
<Card title="MACHINE LEARNING & AI" image={aiml}/>
<Card title="MERN STACK WEB DEVELOPER" image={mern}/>
<Card title="JAVA" image={java}/>
</div>
    </div>
  )
}

export default About
