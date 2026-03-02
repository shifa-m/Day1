import React from 'react'
import Footer from './Footer'

const Bottom = () => {
  return (
            <div>
<div className='flex h-screen text-white'>
      <div className='w-1/2 flex flex-col justify-center pl-20'>
            <h3 className='text-white flex text-4xl font-extrabold align-center'>Hey,I'm a</h3>
            <h1 className='flex text-white text-9xl font-extrabold'>Creative </h1>
             <h1 className='flex text-white text-9xl font-extrabold'> Director</h1>
             </div>
            <div className='w-1/2 flex flex-col justify-center  ml-[35%] '>
                     <h1 className=' text-5xl font-extrabold '>Great design should </h1>
                       <h1 className=' text-5xl font-extrabold'>feel invisible. </h1> 
                       <h1 className='text-2xl  mt-10'>From logo to language. i build brands that </h1>
                       <h1 className='text-2xl '>connect and convert.</h1>

                     

            </div>
            </div>
    <div>
            <Footer/>
    </div>
            
      </div>
    
  )
}

export default Bottom
