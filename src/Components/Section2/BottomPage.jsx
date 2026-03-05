import Content from "./Content"
import { CircleDashed } from "lucide-react"
import {Hourglass} from 'lucide-react'
import { Bolt } from "lucide-react"
import { Layers2 } from "lucide-react"


const BottomPage = () => {
  return (
   <div className='h-screen bg-black text-white text-sm sm:text-base md:text-lg'>
  
  <div className='
    bg-mist-900 
    h-auto 
    py-10 
    rounded-b-[25%] 
    flex 
    flex-col 
    gap-6 
    items-center 
    sm:flex-row 
    sm:justify-center
    sm:gap-10
  '>

    <div className='font-semibold text-center sm:text-left hover:scale-110 transition duration-500'>
      <h1>Trusted by the brand</h1>
      <h1>I have helped shape</h1>
    </div>

    <div className='font-bold text-lg sm:text-2xl hover:scale-110 transition duration-500'>
      <h1 className="flex gap-2 items-center">
        <CircleDashed size={25} />
        Supo Blox
      </h1>
    </div>

    <div className='font-bold text-lg sm:text-2xl hover:scale-110 transition duration-500'>
      <h1 className="flex gap-2 items-center">
        <Hourglass size={25} />
        Hype Blox
      </h1>
    </div>

    <div className='font-bold text-lg sm:text-2xl hover:scale-110 transition duration-500'>
      <h1 className="flex gap-2 items-center">
        <Bolt size={25} />
        FrameBlox
      </h1>
    </div>

    <div className='font-bold text-lg sm:text-2xl hover:scale-110 transition duration-500'>
      <h1 className="flex gap-2 items-center">
        <Layers2 size={25} />
        Ultra Blox
      </h1>
    </div>

  </div>

  <Content />
</div>
  )
}

export default BottomPage
