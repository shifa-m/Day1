import Content from "./Content"
import { CircleDashed } from "lucide-react"
import {Hourglass} from 'lucide-react'
import { Bolt } from "lucide-react"
import { Layers2 } from "lucide-react"


const BottomPage = () => {
  return (
    <div className='h-screen bg-black text-white  '>
            <div className='bg-mist-900 h-[30%] rounded-b-[25%] flex gap-[13%] justify-center
            items-center '>
                        <div className='font-semibold cursor-pointer transition-transform duration-500 hover:scale-110'>
                                    <h1>Trusted by the brand </h1>
                                    <h1>I have helped shape</h1>
                        </div>
                        <div className=' font-bold text-2xl cursor-pointer transition-transform duration-500 hover:scale-110'>
                                    <h1 className="flex gap-2"><CircleDashed size={35} color="#ffffff"  />Supo Blox</h1>
                        </div>
                         <div className='font-bold text-2xl cursor-pointer transition-transform duration-500 hover:scale-110'>
                                    <h1 className="flex gap-2"><Hourglass size={40} color="#ffffff" />Hype Blox</h1>
                        </div>
                         <div className=' font-bold text-2xl cursor-pointer transition-transform duration-500 hover:scale-110'>
                                    <h1 className="flex gap-2"><Bolt size={40} color="#ffffff" />FrameBlox</h1>
                        </div>
                         <div className=' font-bold text-2xl cursor-pointer transition-transform duration-500 hover:scale-110'>
                                    <h1 className="flex gap-2"><Layers2 size={40} color="#ffffff" />Ultra Blox</h1>
                        </div>
                      
            </div>
              <Content/>
      
    </div>
  )
}

export default BottomPage
