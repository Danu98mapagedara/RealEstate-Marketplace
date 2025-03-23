import React,{useRef,useState} from 'react'
import HouseData from '../../constants/HouseData'
import HouseCard from './HouseCard';
import './House.css'
import { motion } from "framer-motion";

const Houses = () => {

  const [searchResults, setSearchResults] = useState(HouseData);


const catogoryRef=useRef(null);
const districtRef=useRef(null);
const cityRef=useRef(null);


const handleSearch=()=>{
const catogory=catogoryRef.current.value;
const district=districtRef.current.value;
const city=cityRef.current.value;

const filterResult=HouseData.filter((property)=>{
    return(
(catogory==="all" || property.category==catogory) &&
(district==="all" ||property.district==district) &&
(city==="all"||property.city==city)
);})
console.log("filteroutput  is",filterResult);
setSearchResults(filterResult);
}

  return (
    <div className='h-container'>
    
    <motion.div 
  className="h-flex"
  initial={{ x: -100, opacity: 0 }} 
  whileInView={{ x: 0, opacity: 1 }} 
  transition={{ duration: 1, ease: "easeOut" }}
>
  <motion.div 
    className="h-left"
    initial={{ x: -100, opacity: 0 }} 
    whileInView={{ x: 0, opacity: 1 }} 
    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
  >
    <h2 className="h-head">
      {"Find your dream".toUpperCase()}{" "}
      <span style={{ color: "green", textAlign: "center", justifyContent: "center" }}>
        PROPERTY
      </span>
    </h2>
  </motion.div>

  <motion.div 
    className="h-right"
    initial={{ x: 100, opacity: 0 }} 
    whileInView={{ x: 0, opacity: 1 }} 
    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
  >
    <div className="h-grid">
      {/* House Category */}
      <div className="input-group">
        <label htmlFor="">House Category</label>
        <select name="house" ref={catogoryRef}>
          <option value="all">All</option>
          <option value="luxury">Luxury Villas</option>
          <option value="signature">Signature Villas</option>
        </select>
      </div>
      {/* District */}
      <div className="input-group">
        <label htmlFor="">District</label>
        <select name="district" ref={districtRef}>
          <option value="all">ALL District</option>
          <option value="Kandy">Kandy</option>
          <option value="Colombo">Colombo</option>
          <option value="Gampaha">Gampaha</option>
        </select>
      </div>
      {/* City Category */}
      <div className="input-group">
        <label htmlFor="">Popular Cities</label>
        <select name="city" ref={cityRef}>
          <option value="all">All Cities</option>
          <option value="gampaha">Gampaha</option>
          <option value="Kottawa">Kottawa</option>
          <option value="Nugegoda">Nugegoda</option>
          <option value="Peradeniya">Peradeniya</option>
          <option value="Peradeniya">Piliyandala</option>
          <option value="Peradeniya">Peradeniya</option>
        </select>
      </div>
    </div>

    <motion.button 
      onClick={handleSearch} 
      className="serch-btn"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      Search
    </motion.button>
  </motion.div>
</motion.div>

        <div className="h-cardcontainer"> 
  {searchResults.length > 0 ? (
    searchResults.map((property, index) => (
      <HouseCard key={index} property={property} />
    ))
  ) : (
    <p>No properties match your search</p>
  )}
</div>     
        </div>
  )
}

export default Houses