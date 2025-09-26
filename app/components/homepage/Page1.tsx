export default function Home() {
  return (
    <div className="bg-lgreen bg-[#0B2C2E] min-h-screen flex flex-col items-center justify-center text-center px-4">
      
      {/* Dots Navigation */}
      <div className="flex space-x-3 mb-6">
        <span className="w-4 h-4 rounded-full bg-gray-600"></span>
        <span className="w-6 h-4 rounded-full bg-[#DFFFE0]"></span>
        <span className="w-4 h-4 rounded-full bg-gray-600"></span>
      </div>

      {/* Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-semibold text-[#DFFFE0] leading-tight">
        Opening gates to <br /> digital world
      </h1>

      {/* Sub Text */}
      <p className="mt-4 max-w-2xl text-lg text-gray-300">
        The most professional consulting out, there <br />
        changing the realm business and digital
      </p>
    </div>
  );
}
