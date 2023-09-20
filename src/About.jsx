import React from 'react'
import './css/about.css'
import 'animate.css';

const About = () => {
  return (
    <div>
      <div className="container">
        <div className="card animate__animated animate__fadeInUp" >
              <div className="about-title">Your Safety, Our Paramount Mission</div>
              <div className="about-desc">Ensuring your security is our utmost priority. From meticulous safety protocols to advanced redundancy systems, your trust in us powers every step of your remarkable space voyage.</div>
        </div>
        <div className="card animate__animated animate__fadeInUp">
              <div className="about-title">Unique Space Experience</div>
              <div className="about-desc">Discover a space odyssey like no other. Our unparalleled packages offer astronaut training, weightlessness, and a mesmerizing Earth view a truly unique encounter with the cosmos.</div>
        </div>
        <div className="card animate__animated animate__fadeInUp">
              <div className="about-title">Your Safety, Our Paramount Mission</div>
              <div className="about-desc">Championing sustainability, we lead responsible space exploration. Our operations harmonize technological advancement with ethical considerations, ensuring the universe we explore today remains vibrant for generations to come.</div>
        </div>
      </div>
    </div>
  )
}

export default About
