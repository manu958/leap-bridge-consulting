import React from 'react'
import { zodiak } from '@/app/fonts'
import { satoshi } from '@/app/fonts'

const ProblemSolv = () => {
    return (
        // <section className="bg-[#e8f5f1] min-h-screen flex flex-col md:flex-row">
        //     <div className="container  mx-auto px-4">
        //   <div className="md:w-1/3 w-full p-8 md:sticky md:top-0 md:h-screen flex flex-col justify-center left-sticky-process ">
        //     <h2 className="text-lg font-semibold mb-3">
        //       Process oriented for <br /> solving problems
        //     </h2>
        //     <p className="text-sm text-gray-700 mb-5">
        //       Praesent ac massa at ligula laoreet iaculis. Vivamus aliquet elit ac
        //       nisl. Sed aliquam aliquet.
        //     </p>
        //     <button className="bg-black text-white px-5 py-2 rounded-md w-fit">
        //       Let’s talk
        //     </button>
        //   </div>

        //   <div className="md:w-2/3 w-full h-screen overflow-y-auto p-8 space-y-6 right-sticky-process ">
        //     {[1, 2, 3, 4].map((num) => (
        //       <div key={num} className="bg-[#d6ebe2] rounded-lg p-6">
        //         <h3 className="text-5xl font-light text-gray-500">{num}</h3>
        //         <h4 className='font-semibold mt-2 ${zodiak.className}'>
        //           {num === 1
        //             ? "Research"
        //             : num === 2
        //             ? "Ideation"
        //             : num === 3
        //             ? "Design"
        //             : "Develop & Test"}
        //         </h4>
        //         <p className='text-sm text-gray-700 mt-2 ${satoshi.className}'>
        //           Phasellus nec sem in justo pellentesque facilisis. Aliquam lorem
        //           ante, dapibus in, viverra quis, feugiat a, tellus. Nam pretium
        //           turpis et arcu.
        //         </p>
        //       </div>
        //     ))}
        //   </div>
        //   </div>
        // </section>
        // <section className="bg-[#e8f5f1] min-h-screen flex flex-col md:flex-row">
        //     <div className="container mx-auto px-4 flex flex-col md:flex-row">
        //         {/* Left Column */}
        //         <div className="md:w-1/3 w-full p-8 md:sticky md:top-0 md:h-screen flex flex-col justify-center left-sticky-process">
        //             <h2 className="text-lg font-semibold mb-3">
        //                 <h2 className={`text-lg font-semibold mb-3 ${zodiak.className}`}>
        //                     Process oriented for <br /> solving problems
        //                 </h2>

        //                 <p className={`text-sm text-gray-700 mb-5 ${satoshi.className}`}>
        //                     Praesent ac massa at ligula laoreet iaculis. Vivamus aliquet elit ac nisl. Sed aliquam aliquet.
        //                 </p>

        //                 <button className={`bg-black text-white px-5 py-2 rounded-md w-fit ${satoshi.className}`}>
        //                     Let’s talk
        //                 </button>
        //             </h2>
        //         </div>

        //         {/* Right Column */}
        //         <div className="md:w-2/3 w-full h-screen overflow-y-auto p-8 space-y-6 right-sticky-process">
        //             {[1, 2, 3, 4].map((num) => (
        //                 <div key={num} className="bg-[#d6ebe2] rounded-lg p-6">
        //                     <h3 className="text-5xl font-light text-gray-500">{num}</h3>
        //                     <h4 className={`font-semibold mt-2 ${zodiak.className}`}>
        //                         {num === 1
        //                             ? "Research"
        //                             : num === 2
        //                                 ? "Ideation"
        //                                 : num === 3
        //                                     ? "Design"
        //                                     : "Develop & Test"}
        //                     </h4>
        //                     <p className={`text-sm text-gray-700 mt-2 ${satoshi.className}`}>
        //                         Phasellus nec sem in justo pellentesque facilisis. Aliquam lorem
        //                         ante, dapibus in, viverra quis, feugiat a, tellus. Nam pretium
        //                         turpis et arcu.
        //                     </p>
        //                 </div>
        //             ))}
        //         </div>
        //     </div>
        // </section>




        <section className="bg-[#e8f5f1] min-h-screen flex flex-col md:flex-row">
            <div className="container mx-auto px-4 flex flex-wrap">
                <div className="md:w-1/2 w-full p-8 md:sticky md:top-[50px] md:h-screen">
                    <div className="text-lg max-w-sm  mb-3">
                        <h2 className={`${zodiak.className} text-[35px] font-semibold text-[#1B3233] mb-3`}>
                            Process oriented for <br /> solving problems
                        </h2>
                        <p className={`${satoshi.className} text-[20px] text-[#1B3233] mb-5`}>
                            Praesent ac massa at ligula laoreet iaculis. Vivamus aliquet elit ac nisl. Sed aliquam aliquet.
                        </p>
                        <button
                            className={`${satoshi.className} bg-[#1B3233] text-[#ECF6F2] text-[20px] px-5 py-2 rounded-[40px] w-fit`}
                        >
                            Let’s talk
                        </button>

                    </div>
                </div>

                <div className="md:w-1/2 w-full p-8 space-y-6 right-sticky-process text-[#1B3233]">

                    <div className="bg-[#d6ebe2] rounded-lg p-28">
                        <h3 className={`${zodiak.className} text-5xl font-light text-[100px] mb-16`}>1</h3>
                        <h4 className={`${zodiak.className} font-semibold text-[26px] mb-8`}>Research</h4>
                        <p className={`${satoshi.className} text-sm text-[20px] mt-2`}>
                            Phasellus nec sem in justo pellentesque facilisis. Aliquam lorem
                            ante, dapibus in, viverra quis, feugiat a, tellus. Nam pretium
                            turpis et arcu.
                        </p>
                    </div>

                    <div className="bg-[#d6ebe2] rounded-lg p-28">
                        <h3 className={`${zodiak.className} text-5xl text-[100px] font-light mb-16`}>2</h3>
                        <h4 className={`${zodiak.className} font-semibold text-[20px] mb-8`}>Ideation</h4>
                        <p className={`${satoshi.className} text-sm text-[20px] mt-2`}>
                            Phasellus nec sem in justo pellentesque facilisis. Aliquam lorem
                            ante, dapibus in, viverra quis, feugiat a, tellus. Nam pretium
                            turpis et arcu.
                        </p>
                    </div>

                    <div className="bg-[#d6ebe2] rounded-lg p-28">
                        <h3 className={`${zodiak.className} text-5xl font-light text-[100px] mb-16`}>3</h3>
                        <h4 className={`${zodiak.className} font-semibold text-[26px] mb-8`}>Design</h4>
                        <p className={`${satoshi.className} text-sm text-[20px] mt-2`}>
                            Phasellus nec sem in justo pellentesque facilisis. Aliquam lorem
                            ante, dapibus in, viverra quis, feugiat a, tellus. Nam pretium
                            turpis et arcu.
                        </p>
                    </div>

                    <div className="bg-[#d6ebe2] rounded-lg p-28">
                        <h3 className={`${zodiak.className} text-5xl text-[100px] font-light mb-16`}>4</h3>
                        <h4 className={`${zodiak.className} font-semibold text-[26px] mb-8`}>Develop & Test</h4>
                        <p className={`${satoshi.className} text-sm text-[20px] mt-2`}>
                            Phasellus nec sem in justo pellentesque facilisis. Aliquam lorem
                            ante, dapibus in, viverra quis, feugiat a, tellus. Nam pretium
                            turpis et arcu.
                        </p>
                    </div>

                </div>

            </div>
        </section>

    )
}

export default ProblemSolv
