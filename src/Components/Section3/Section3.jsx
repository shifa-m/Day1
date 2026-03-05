import React from "react";

const Section3 = (props) => {
  return (
    <div className="w-full bg-mist-900 py-16 px-4">
      
      <div className="flex flex-wrap justify-center gap-6">
        
        {props.images.map((img, index) => (
          <div
            key={index}
            className="
              w-full 
              sm:w-[48%] 
              lg:w-[23%]
              h-64 
              sm:h-72 
              lg:h-150
              overflow-hidden
              rounded-3xl
              transition-transform 
              duration-500 
              hover:scale-105
              shadow-lg shadow-red-900
              cursor-pointer
              
            "
          >
            <img
              src={img}
              alt={`image-${index}`}
              className="w-full h-full object-cover  "
            />
          </div>
        ))}

      </div>

    </div>
  );
};

export default Section3;