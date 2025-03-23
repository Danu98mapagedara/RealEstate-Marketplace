import React,{Suspense,lazy} from 'react'
import images from '../../constants/images'
import './Home.css'
import ContactUs from '../ContactUs/ContactUs'
import Slider from '../../components/Slider/Slider'
import Homeslider from '../../components/Homeslider/Homeslider'
import  {easeInOut, motion } from 'framer-motion'


const Home = () => {
  return (
    <div className='home-container'>
        <div className="home-banner">
<Homeslider/>
        </div>

        <div className="home-content">
            <motion.div className="homecontent-left"
            initial={{opacity:0,x:-200}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1.3,ease:easeInOut}}
            
            >
                <img src={images.man} width={500} alt="" />
            </motion.div>

            
            <motion.div className="homecontet-right"
             initial={{opacity:0,x:100}}
             whileInView={{opacity:1,x:0}}
             transition={{duration:1.3,ease:easeInOut}}
            
            
            >
                <div className="right-1">
                <h1>Why Choose Us?</h1>
                <p>Everyone aspires to own a great piece of property. We, at Prime Lands,
                     made it our aim to make this dream a reality. Assume you wish to buy land 
                     to build a house for you and your family. Prime Lands provide you with a selection 
                     of the most excellent land alternatives in the country, as well as a variety of support services, 
                     such as legal and financial assistance, to help you realize your property dreams. In Sri Lanka's 
                     highly competitive real estate market, Prime Lands acquired over 300,000 customers, sufficient proof of
                     Prime Lands' capacity and leadership in the real estate industry. .</p>
            
                </div>
        <div className="right2">
                 <h2>Best Real Estate Project of the Year</h2>
                 <img src={images.certificate} width={300} alt="" />
        </div>
            </motion.div>
        </div>
        <Slider/>
        <div className="contact-form">
          <ContactUs/>
        </div>
    </div>
  )
}

export default Home