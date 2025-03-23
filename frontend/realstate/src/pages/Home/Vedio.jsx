import React from 'react'
import images from '../../constants/images'

const Vedio = () => {
  return (
    <Vedio
    src={images.vedio}
    autoPlay="autoplay"
    loop='loop'
    muted='muted'
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      position: 'absolute',
      top: 50,
      left: 0,
     
    }}
    
    >

    </Vedio>
  )
}

export default Vedio