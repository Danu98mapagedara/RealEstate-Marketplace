import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import axios from 'axios';
import './Land.css';

const Landsell = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = (data) => {
 console.log("data is",data);

 
 axios.post('http://localhost:8000/api/lands', data)
      .then((response) => {
        console.log('Form submitted successfully:', response.data);
        alert('Form submitted successfully');
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        alert('Error submitting form');
      });

    reset();
  };
 

  return (
    <div className="sellproperty-container">
      <div className="form-container">
        <h2>
          SELL YOUR LAND OR <span style={{ color: 'green' }}>PROPERTY</span>
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <p>Contact Information</p>

          <motion.div
            className="form-row"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            
          >
            <div className="form-column">
              <label>Full Name:</label>
              <input
                type="text"
                {...register('contactName', { required: 'Full Name is required' })}
                placeholder="Full Name"
              />
              {errors.contactName && <span className="error">{errors.contactName.message}</span>}
            </div>
            {/* <div className="form-column">
              <label>Email:</label>
              <input
                type="email"
                {...register('email', { required: 'Email is required' })}
                placeholder="Email Address"
              />
              {errors.email && <span className="error">{errors.email.message}</span>}
            </div> */}
          </motion.div>

          <motion.div
            className="form-row"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 ,ease:'easeInOut'}}
            
          >
            <div className="form-column">
              <label>Phone Number:</label>
              <input
                type="number"
                {...register('contactPhoneNumber', { required: 'Phone Number is required' })}
                placeholder="Phone Number"
              />
              {errors.contactPhoneNumber && <span className="error">{errors.contactPhoneNumber.message}</span>}
            </div>
         
          </motion.div>

<div className='land-info'> <p>Land Information</p></div>
         
<motion.div
            className="form-row"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            
          >
            <div className="form-column">
              <label>Land  Type:</label>
              <input
                type="text"
                {...register('type', { required: 'District is required' })}
                placeholder="type"
              />
              {errors.type && <span className="error">{errors.type.message}</span>}
            </div>
            <div className="form-column">
              <label>Title:</label>
              <input
                type="text"
                {...register('title', { required: 'title is required' })}
                placeholder="City"
              />
              {errors.title && <span className="error">{errors.title.message}</span>}
            </div>
          </motion.div>

          <motion.div
            className="form-row"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            
          >
            <div className="form-column">
              <label>District:</label>
              <input
                type="text"
                {...register('district', { required: 'District is required' })}
                placeholder="District"
              />
              {errors.district && <span className="error">{errors.district.message}</span>}
            </div>
            <div className="form-column">
              <label>City:</label>
              <input
                type="text"
                {...register('city', { required: 'City is required' })}
                placeholder="City"
              />
              {errors.city && <span className="error">{errors.city.message}</span>}
            </div>
          </motion.div>

          <motion.div
            className="form-row"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            
          >
            <div className="form-column">
              <label>Price (per size) in LKR:</label>
              <input
                type="number"
                {...register('price', { required: 'Price is required' })}
                placeholder="Price per size"
              />
              {errors.price && <span className="error">{errors.price.message}</span>}
            </div>
            <div className="form-column">
              <label>Extent (in sizees):</label>
              <input
                type="number"
                {...register('size', { required: 'Extent is required' })}
                placeholder="Extent in sizees"
              />
              {errors.size && <span className="error">{errors.size.message}</span>}
            </div>
          </motion.div>

          <motion.div
            className="form-row"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            
          >
            <div className="form-column">
              <label>Attach the survey plans and land images:</label>
              <input type="file" {...register('images',)} />
              {errors.images && <span className="error">{errors.images.message}</span>}
            </div>
          </motion.div>

          <motion.button className="con-btn" disabled={isSubmitting}    initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}    >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default Landsell;
