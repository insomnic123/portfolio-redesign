import Image from "next/image";
import localFont from "next/font/local";
import NavBar from "./navbar/navbar";

const Ahsing = localFont({
  src: "fonts/Ahsing.ttf"
})

const DMSans = localFont({
  src: "fonts/DMSans_18pt-Regular.ttf"
})

export default function Home() {
  return (
    <div className="min-h-screen bg-[url('/flower.png')] bg-repeat bg-cover relative">
       <div className="w-full fixed top-0 left-0 z-20">
        <NavBar />
      </div>
            <div className="flex flex-col items-start justify-center pt-24"> {/* pt-24 gives space below navbar */}
        <div className="backdrop-blur-md bg-white/30 p-6 rounded-lg shadow-md md:p-10 max-w-xl mx-40 mt-12 shadow-xl z-10">
          <h1 className={`text-4xl font-bold mb-4 ${Ahsing.className}`}>Hey There!</h1>
          <p className={`text-gray-800 text-md leading-relaxed ${DMSans.className}`}>
            My name is Qazi, and I am a student starting G12 in the fall of 2025 at Danforth CTI in Toronto!
            I am an aspiring computer engineer who is looking to constantly grow and learn new things! I’ve been
            coding since grade six, and have slowly been building my skills as both a programmer, designer, and
            aspiring entrepreneur. Outside of programming, I really enjoy learning new things, whether it’s astronomy,
            learning an instrument, playing sports, etc! Keep scrolling to find out more :)
          </p>
        </div>

        <div className="absolute bottom-0 right-60 w-1/2 max-w-[300px] md:max-w-[400px]">
          <Image src="/lebron.png" alt="Photo of me w/ a Lebron Cutout" width={400} height={400} />
        </div>
      </div>
    </div>
  );
}
