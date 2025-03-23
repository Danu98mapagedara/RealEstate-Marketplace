import React from 'react'
import { motion } from 'framer-motion'
import './Card.css'

const HouseCard = ({ property }) => {
  return (
    <motion.div 
      className='h-card' 
      initial={{ opacity: 0, y: 100 }}  
      whileInView={{ opacity: 1, y: 0 }}  
      transition={{ duration: 1, ease: "easeInOut" }} 
      

    > 
      <div className="h-image">
        <img src={property.image} alt={property.title} />
      </div>
      <div className="h-carddetails">
        <h3>{property.title}</h3>
        <h5>{property.price}</h5>
      </div>
    </motion.div>
  )
}

export default HouseCard
