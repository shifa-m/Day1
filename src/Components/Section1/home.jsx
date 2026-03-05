import React from 'react'
import Bottom from './bottom'
import {ArrowRight} from 'lucide-react'
import {UserRoundPlus} from 'lucide-react'

const Home = () => {
  
  const click=()=>{
    
    alert("Profile is Logged In");
  }

  return (
   <div className="bg-[url('https://images.unsplash.com/photo-1620911822206-7beb8e56323f?q=80&w=1170&auto=format&fit=crop')] 
                min-h-screen 
                w-full 
                bg-cover 
                bg-center 
                md:rounded-b-[18%] 
                rounded-b-[10%] 
                overflow-hidden">

     <div className="flex flex-col md:flex-row justify-between items-center text-white p-6">

  <h1 className="text-3xl md:text-5xl font-extrabold cursor-pointer transition-transform duration-500 hover:scale-110">
    Folioblox
  </h1>

  <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 text-lg md:text-xl font-bold mt-4 md:mt-0">
    <a href="#" className="transition-transform duration-500 hover:scale-110">Home</a>
    <a href="#" className="transition-transform duration-500 hover:scale-110">About</a>
    <a href="#" className="transition-transform duration-500 hover:scale-110">Project</a>

    <button onClick={click} className="bg-white text-black px-5 py-3 rounded-full flex gap-4 items-center text-lg transition-transform duration-500 hover:scale-110">
      Profile 
       <UserRoundPlus className='cursor-pointer transition-transform duration-300 hover:scale-115'/>
      <ArrowRight size={24} className="bg-red-600 text-white rounded-xl cursor-pointer transition-transform duration-300 hover:scale-110" />
     
    </button>
  </div>
</div>
<Bottom/>
    </div>
  )
}

export default Home