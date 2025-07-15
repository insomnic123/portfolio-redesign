import Image from "next/image";
import localFont from "next/font/local";

const Ahsing = localFont({
  src: "/fonts/Ahsing.otf"
})

export default function Home() {
  return (

    <div className="min-h-screen bg-[url('/flower.png')] bg-repeat bg-cover flex flex-col justify-center relative">

      <div className = "backdrop-blur-md bg-white/30 rounded-xl p-6 md:p-10 max-w-xl mx-40 mt-12 shadow-xl z-10">
        <h1 className={`text-4xl font-bold mb-4 ${Ahsing.className}`}>Hey There!</h1>
        <p className="text-gray-800 text-md leading-relaxed">
          My name is Qazi, and I am a student starting G12 in the fall of 2025 at Danforth CTI in Toronto!
          I am an aspiring computer engineer who is looking to constantly grow and learn new things! I’ve been
          coding since grade six, and have slowly been building my skills as both a programmer, designer, and
          aspiring entrepreneur. Outside of programming, I really enjoy learning new things, whether it’s astronomy,
          learning an instrument, playing sports, etc! Keep scrolling to find out more :)
        </p>
      </div>
      <div className = "absolute bottom-0 right-60 w-1/2 max-w-[300px] md:max-w-[400px]">
        <Image src="/lebron.png" alt = "Photo of me w/ a Lebron Cutout" width={400} height={400}/>
      </div>
      </div>
  );
}
