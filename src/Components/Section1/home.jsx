import React from 'react'
import Bottom from './bottom'

const Home = () => {
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1620911822206-7beb8e56323f?q=80&w=1170&auto=format&fit=crop')] h-screen w-full bg-cover bg-center rounded-b-[10%] overflow-hidden">

      <div className="flex justify-between items-center text-white p-6">

      
        <h1 className="text-5xl font-extrabold">
          Folioblox
        </h1>

        
        <div className="flex items-center gap-30 text-xl font-bold">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Project</a>
          <button className="bg-white px-6 py-2 rounded-full text-black">
            Get in Touch
          </button>
        </div>
      
      </div>
<Bottom/>
    </div>
  )
}

export default Home