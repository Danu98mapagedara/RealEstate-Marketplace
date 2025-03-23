import React from 'react';
import { motion } from 'framer-motion'
import './Land.css';

const LandCard = ({ land }) => {
  return (
    <motion.div className="land-card"
    
    initial={{ opacity: 0, y: 100 }}  
      whileInView={{ opacity: 1, y: 0 }}  
      transition={{ duration: 1.2, ease: "easeInOut" }} 
    
    >
      <div className="land-image">
        <img src={land.image} alt={land.title} />
      </div>
      <div className="land-details">
        <h3>{land.title}</h3>
        <p>{land.landType} Land</p>
        <h4>{land.price}</h4>
        <h5>Area: {land.area}</h5>
        <p>{land.city}, {land.district}</p>
      </div>
    </motion.div>
  );
};

export default LandCard;
