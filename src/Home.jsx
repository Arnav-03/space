import React from 'react'
import './css/home.css'
import cloud1 from './assets/clouds-1.svg'
import cloud2 from './assets/clouds-2.svg'
import rocket from './assets/rocket.svg'
import planet from './assets/planet.svg'
import dot from './assets/points-space.svg'
import 'animate.css';

const Home = () => {
  return (
    <>
      <div className="homemain">

        <div className="info-rocket">
          <div className=' info' >
            <span className='animate__animated animate__fadeInDown'>NAVIGATE THE UNIVERSE</span>
            <div className="title animate__animated animate__fadeInDown">start exploring infinte space</div>
            <div className="desc animate__animated animate__fadeInDown">Embark on extraordinary adventures beyond Earth's boundaries, discovering the marvels of the cosmos.</div>
            <button class=" button-52" role="button">get started</button>
          </div>

          <div className="rocket ">
            <img  src={planet} alt="" id='p1' className='animate__animated animate__fadeInLeft'/>
            <img src={rocket} alt="" id='rocket' className='animate__animated animate__fadeInUpBig' />
            <img src={planet} alt="" id='p2' className='animate__animated animate__fadeInRight'/>
          </div>
        </div>
        <div className="clouds">
          <img src={cloud2} alt="" id='c1' className='animate__animated animate__fadeInUp' />
          <img src={cloud1} alt="" id='c2' className='animate__animated animate__fadeInRight' />
        </div>
      </div>
    </>
  )
}

export default Home
