import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import './Land.css';

const Landsell = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
                {...register('fullname', { required: 'Full Name is required' })}
                placeholder="Full Name"
              />
              {errors.fullname && <span className="error">{errors.fullname.message}</span>}
            </div>
            <div className="form-column">
              <label>Email:</label>
              <input
                type="email"
                {...register('email', { required: 'Email is required' })}
                placeholder="Email Address"
              />
              {errors.email && <span className="error">{errors.email.message}</span>}
            </div>
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
                {...register('pnumbr', { required: 'Phone Number is required' })}
                placeholder="Phone Number"
              />
              {errors.pnumbr && <span className="error">{errors.pnumbr.message}</span>}
            </div>
            <div className="form-column">
              <label>Address:</label>
              <input
                type="text"
                {...register('address', { required: 'Address is required' })}
                placeholder="Address"
              />
              {errors.address && <span className="error">{errors.address.message}</span>}
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
              <label>Price (per perch) in LKR:</label>
              <input
                type="number"
                {...register('price', { required: 'Price is required' })}
                placeholder="Price per perch"
              />
              {errors.price && <span className="error">{errors.price.message}</span>}
            </div>
            <div className="form-column">
              <label>Extent (in perches):</label>
              <input
                type="number"
                {...register('perch', { required: 'Extent is required' })}
                placeholder="Extent in perches"
              />
              {errors.perch && <span className="error">{errors.perch.message}</span>}
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
              <input type="file" {...register('images', { required: 'File is required' })} />
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
