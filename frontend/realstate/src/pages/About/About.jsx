import React from 'react'
import images from '../../constants/images'
import CountUp from "react-countup";
import { easeInOut, motion } from 'framer-motion';
import  './about.css'

const About = () => {
  return (
    <div className="abt-container">
        <motion.div className="vision"
        
       
        
        >

            <motion.div className="abt-image"
               initial={{opacity:0,x:-100}}
               whileInView={{opacity:1,x:0}}
               transition={{duration:1, ease: "easeInOut"}}
            >
                <img src={images.about} alt="" width={400} />
            </motion.div>
<motion.div className="vision-txt"

initial={{opacity:0,x:100}}
whileInView={{opacity:1,x:0}}
transition={{duration:1, ease: "easeInOut"}}

>
    <h1>Our  Mission</h1>
    <p>Everyone aspires to own a great piece of property. We, at  Lands, made it our aim to make this dream a reality. 
        Assume you wish to buy land to build a house for you and your family. Prime Lands provide you with a selection of the most excellent land alternatives in the country, as well as a variety of support services, such as legal and financial assistance, to help you realize your property dreams. In Sri Lanka's highly competitive real estate market, Prime Lands acquired over 300,000 customers,
         sufficient proof of Prime Lands' capacity and leadership in the real estate industry. </p>
    
    <h3>Our Vision</h3>
   <h5>Committed to creating a better place on earth.</h5>
    </motion.div>        </motion.div>
      
      
      
        <motion.div className="history"
          
          initial={{opacity:0,y:100}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:1, ease: "easeInOut"}}

        >
    <div className="his-text">
        <h1>Our History</h1>
        <p>Ouyr Buisness was founded 29+ years ago with the vision of “Committed to creating a better place on earth.” Started 
            small with only four employees, Prime Group, quickly rose to the top of the real estate business in Sri Lanka with having a clear market focus, 
            a high level of financial discipline, and implementing innovative marketing approaches. </p>
    </div>
    <div className="his-image">
        <img src={images.history} alt="" width={400} />
    </div>

        </motion.div>


        <div className="awards">
<motion.div className="award-img"

initial={{opacity:0,x:-100}}
whileInView={{opacity:1,x:0}}
transition={{duration:1,ease:easeInOut}}
>
    <img src={images.achive} alt="" width={400} />
</motion.div>
<motion.div className="awd-list"
initial={{opacity:0,x:100}}
whileInView={{opacity:1,x:0}}
transition={{duration:1,ease:easeInOut}}
>
    <ul>
        <motion.li  ><CountUp start={0} end={20} duration={5} />   Years of Trust</motion.li>
        <li> <CountUp start={0} end={3000} duration={3}/> Satisfied Customers</li>
        <li><CountUp start={0} end={18} duration={5}/>  Districts Covered</li>
        
    </ul>
</motion.div>

        </div>
        <motion.div className="policy"
        initial={{opacity:0,y:100}}
        whileInView={{opacity:1,y:0}}
        transition={{duration:1,ease:easeInOut}}
        >
            <div className="policy1">
                <h3>CORPORATE RESPONSIBILITY</h3>
                <p>As a trusted real estate company, we recognize 
                    that corporate responsibility is essential for sustainable business
                     growth and maintaining a reputable brand. We are committed to shaping 
                     a better future by developing properties that positively impact communities 
                     and the environment. Our approach integrates eco-friendly practices, community
                      engagement, and ethical business operations to ensure long-term value for our customers, 
                      partners, and stakeholders.</p>
           
            </div>

            <div className="policy2">
                <h3>QUALITY POLICY</h3>
                <p>We are committed to providing high-quality, 
                    value-driven real estate solutions that exceed customer expectations. 
                    Our focus is on delivering premium properties with excellent value for money, 
                    ensuring timely service, and creating a seamless and personalized customer experience.
                     We recognize our employees as the foundation of our success and continuously strive
                      to enhance their growth and well-being. Additionally, we prioritize sustainable development, 
                      ensuring our projects align with environmental and social responsibilities. Through regular 
                      contributions to environmental and community initiatives, we uphold our corporate social duty 
                      and strive to build a better future.</p>
            </div>
        </motion.div>
    </div>
  )
}

export default About