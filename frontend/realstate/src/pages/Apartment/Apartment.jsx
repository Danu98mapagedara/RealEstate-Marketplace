import React,{useState,useRef} from 'react'
import  ApartmnetData  from '../../constants/ApartmentData'
import './Apartment.css'
import  {motion } from 'framer-motion'

const Apartment = () => {
 
    const [filter,setFilter]=useState("new");

const handleFilter=(status)=>{
    setFilter(status);   
}
const filterApartments=
     filter === "ApartmnetData" 
      ? ApartmnetData 
      : ApartmnetData.filter((item) => item.status === filter);

  return (
<div className="apa-con">
    <div className="filter-buttons">
        <button onClick={()=>handleFilter("new")}  className={filter==="new"?"active":""}>New</button>
        <button onClick={()=>handleFilter("ongoing") }  className={filter==="ongoing"?"active":""}>Ongoing</button>
        <button onClick={()=>handleFilter("complete")}  className={filter==="complete"?"active":""}>Complete</button>
    </div>

    {filterApartments.map((apartment,index)=>(
        <div  key={index} className="apartment-card">
            <motion.div className="card-flex"
          
              initial={{opacity:0,y:100}}
              whileInView={{opacity:1,y:0}}
              transition={{duration:1,ease:"easeInOut"}}
            
            >
            <motiondiv className="apa-image">
          <img src={apartment.image} />
          </motiondiv>
        <div className="apa-details">
        <h3 className='apa-title'>{apartment.title}</h3>
        <p className='apa-des'>{apartment.description}</p>
                <p>Location <span className='price'>{apartment.location}</span></p>
              <p className='apa-price'>Starting  Price<span className='price'>{apartment.price}</span></p>
            
              <h5 className='apa-number'>Contact Us<span className='price'>{apartment.number}</span></h5>
        </div>
            </motion.div>
          
     
        </div>
    ))}
</div>
  )
}

export default Apartment