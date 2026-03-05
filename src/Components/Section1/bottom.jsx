import React from 'react'

const Bottom = () => {
  return (
<div className="flex flex-col min-h-screen">
  <div className="flex flex-col md:flex-row min-h-screen text-white  ">

  {/* Left Side */}
  <div className="md:w-1/2 flex flex-col justify-center  px-6 md:pl-10 text-center md:text-left">
    <h3 className="text-2xl md:text-4xl sm:text-2xl lg:text-6xl font-extrabold cursor-pointer   transition-transform duration-500 hover:scale-105">
      Hey, I'm a
    </h3>

    <h1 className="text-5xl md:text-6xl lg:text-9xl font-extrabold cursor-pointer transition-transform duration-500 hover:scale-105">
      Creative
    </h1>

    <h1 className="text-5xl md:text-6xl lg:text-9xl font-extrabold cursor-pointer transition-transform duration-500 hover:scale-105">
      Director
    </h1>
  </div>

  {/* Right Side */}
  <div className="md:w-1/2 flex flex-col justify-center px-6 mt-10 md:mt-0 text-center md:text-left lg:pl-[17%]">
    <h1 className="text-2xl md:text-5xl font-extrabold cursor-pointer transition-transform duration-500 hover:scale-105">
      Great design should
    </h1>

    <h1 className="text-2xl md:text-5xl font-extrabold cursor-pointer transition-transform duration-500 hover:scale-105">
      feel invisible.
    </h1>

    <p className="text-base md:text-2xl mt-6 cursor-pointer transition-transform duration-500 hover:scale-105">
      From logo to language. I build brands <br /> that connect and convert.
    </p>
  </div>

</div>
<div >
  
</div>
  
</div>

    
  )
}

export default Bottom
