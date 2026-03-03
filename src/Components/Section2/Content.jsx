import { ArrowRight } from "lucide-react";

const Content = () => {
  return (
    <div className="flex flex-col mt-[10%]">

      {/* Top Section */}
      <div className="flex items-center">
        
        {/* Left Side */}
        <div className="w-1/2 ml-[2%] cursor-pointer transition-transform duration-500 hover:scale-105">
          <h1 className="text-orange-500 font-bold text-4xl">Behind the Designs</h1>
          <h1 className="text-white font-bold text-6xl">Shaping</h1>
          <h1 className="text-white font-bold text-7xl">Experiences That</h1>
          <h1 className="text-white font-bold text-8xl">Make Life Simpler</h1>
        </div>

        {/* Right Side */}
        <div className="w-1/2 flex justify-center cursor-pointer transition-transform duration-500 hover:scale-105">
          <h1 className="text-5xl font-medium text-white">
            I'm a product designer focused on <br />
            building clean, intuitive interfaces <br />
            that solves real-world problems.
          </h1>
        </div>

      </div>

      {/* Bottom Section (Now Properly Below) */}
      <div className="mt-5 ml-[57%] flex gap-[40%]">
        <h1 className="text-gray-500 text-xl font-semibold cursor-pointer transition-transform duration-500 hover:scale-110">
          Let's Build Something <br /> Meaningful Together
        </h1>

        <button className="mt-4 bg-orange-500 text-white px-5 py-4 rounded-full flex gap-10 text-xl cursor-pointer transition-transform duration-500 hover:scale-110">
          Get in touch<ArrowRight size={30} color="black" className="bg-white rounded-2xl "/>
        </button>
      </div>

    </div>
  );
};


export default Content
