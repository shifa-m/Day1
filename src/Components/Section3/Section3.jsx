import React from 'react'

const Section3 = (props) => {
  console.log(props.images)

  return (
    <div className='h-screen w-full bg-mist-900'>
      <div className='flex items-center justify-around h-full  '>
        
        {props.images.map((img, index) => (
          <img 
            key={index}
            className='h-[65%] w-[23%] rounded-3xl transition-transform duration-500 hover:scale-115 bg-cover'
            src={img}
            alt={`image-${index}`}
          />
        ))}

      </div>
    </div>
  )
}

export default Section3