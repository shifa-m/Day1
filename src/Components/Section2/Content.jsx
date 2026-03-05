import { ArrowRight } from "lucide-react";

const Content = () => {

  const click=()=>{
    alert("Great to connect")
  }

  return (
    <div className="flex flex-col mt-16 px-4 sm:px-8">

      {/* Top Section */}
      <div className="flex flex-col lg:flex-row gap-10">

        {/* Left Side */}
        <div className="w-full lg:w-1/2 transition duration-500 hover:scale-105 lg:mt-24">
          <h1 className="text-red-600 font-bold text-xl sm:text-2xl md:text-3xl">
            Behind the Designs
          </h1>

          <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Shaping
          </h1>

          <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Experiences That
          </h1>

          <h1 className="text-white font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Make Life Simpler
          </h1>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 flex items-center transition duration-500 hover:scale-105 lg:mt-24">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white">
            I'm a product designer focused on building clean,
            intuitive interfaces that solve real-world problems.
          </p>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">

        <h1 className="text-gray-500 text-lg sm:text-xl lg:ml-[51%] font-semibold hover:scale-110 transition duration-500">
          Let's Build Something <br /> Meaningful Together
        </h1>

       <button onClick={click} className="
bg-red-700 
text-white 
px-3 py-1.5
sm:px-4 sm:py-2  
md:px-5 md:py-2.5 
lg:px-6 lg:py-3 lg:mr-[10%]
rounded-full 
flex items-center 
gap-4 
text-sm sm:text-base md:text-lg lg:text-xl
hover:scale-110 
transition duration-500
">
          Get in touch
          <ArrowRight size={24} className="bg-white text-black rounded-full p-1" />
        </button>

      </div>

    </div>
  );
};

export default Content;