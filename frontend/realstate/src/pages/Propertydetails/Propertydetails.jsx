import React from 'react'
import { useParams,NavLink} from 'react-router-dom'
import land from '../../constants/land'
import './Details.css'
import images from '../../constants/images'
import facility from '../../constants/facility'
import { motion } from "framer-motion";



const paymentVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.2 }, 
  }),
};

const Propertydetails = ({land}) => {

  const paymentOptions = [
    "Pay a 15% Down Payment & the Remaining Balance can be paid within 12 months without interest.",
    "Pay a 25% Down Payment & the Remaining Balance can be paid within 18 months without interest.",
    "Pay a 5% Down Payment & the Remaining Balance can be paid within 6 months without interest.",
    "Pay a 2% Down Payment & the Remaining Balance can be paid within 12 months without interest.",
  ];

    const { id } = useParams(); 
    console.log("land data in Propertydetails: ", land); 
  console.log("id from useParams: ", id);
    const landItem = land.find((item) => item.id === Number(id));
  
    if (!landItem) {
        return <h2>Property Not Found</h2>;
      }
  
    return (
      <div className="property-container">
       
       <motion.div
        className="content-head"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
          <button className='back-btn' > <NavLink to="/" style={{ textDecoration: 'none', color: 'black' }}></NavLink> Back </button>
          <p className='land-title'>{landItem.title}</p>

             </motion.div>
     
<div className="propey-flex">
<div className="property-content">
<motion.div
            className="property-image"
            initial={{ opacity: 0, x: 200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.8 }}
          >
        <img src={landItem.block} alt="" width={800} />
      </motion.div>

      <motion.div
            className="property-flex"
            initial={{ opacity: 0, scale: 0.5, y: 100 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
        <div className="call">
          <img src={images.call} alt="" width={50} />
          <p>
            Call Us: <span>{landItem.number}</span>
          </p>
        </div>

        <div className="location">
          <img src={images.map} alt="" width={50} />
          <p>
            Location: <span>{landItem.location}</span>
          </p>
        </div>

        <div className="price">
          <h3>{landItem.price}</h3>
        </div>
      </motion.div>
      <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <h2 style={{color:'green',textAlign:'center'}}>
            THE BEST LANDS AND HOUSES BY PRIME LANDS; THE LEADING REAL ESTATE COMPANY IN SRI LANKA!</h2>
        {landItem.description}
      </motion.p>
     
          
        </div>
{facility.map((item) => (
  <motion.div 
  className="property-facility"
   key={item.id}
   initial={{ opacity: 0, y: 80 }}
   whileInView={{opacity:1,y:0}}
    transition={{duration:0.8}}
   
   >
    <div className='fac-image'></div>
    <img src={item.image} width={50} />
    <div className="fac-titile">
    <p>{item.title}</p>
    </div>
  
  </motion.div>
))}
</div>
         
        <div  className="payment-details"  
        >
          <h3>Payment  Details</h3>
          <ul className="payment-list">
        {paymentOptions.map((text, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: index * 0.3 }}
            viewport={{ amount: 0.2 }} 
          >
            {text}
          </motion.li>
        ))}
      </ul>
        </div>
      </div>
  )
}

export default Propertydetails