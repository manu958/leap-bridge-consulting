import React from 'react'
// import Image from "next/image";
import { zodiak } from "@/app/fonts";

const ServicesMap = () => {
  return (
    // <section className="relative w-full min-h-[500px] flex flex-col items-center justify-center bg-[#e6f7f1]">

    //   <Image
    //     src="/assests/header/logoimage/Map Light BG.svg"
    //     alt="World Map Background"
    //     fill
    //     className="object-contain opacity-70 map-img"
    //     priority
    //   />

    //   <div className="relative z-10 text-center px-6">
    //     <p
    //       className={`${zodiak.className} text-[36px] font-normal leading-[130%] text-gray-900 max-w-4xl mx-auto`}
    //     >
    //       Since 1994 WeConsult brings the smartest people together offering
    //       exceptional consulting services for the biggest players.
    //     </p>
    //   </div>

    // </section>





  <section className="relative w-full flex flex-col items-center justify-center bg-[#daebe3]">


     <div className="relative z-10 max-w-4xl md:py-[170px] md:px-[100px] py-[50px] px-[30px] md:my-[90px] my-[50px] text-center px-6 bg-[url('/assests/header/logoimage/map_light_img.svg')] bg-contain bg-center bg-no-repeat">
        <p className={`${zodiak.className} text-[30px] font-normal leading-[130%] text-gray-900 mx-auto`} >
          Since 1994 WeConsult brings the smartest people together offering
          exceptional consulting services for the biggest players.
        </p>
      </div>

    </section>
  )
}

export default ServicesMap
