import Image from 'next/image';
const TechStack = ({ Ahsing, DMSans}) => {
    const tiles = [
    {
        icon: "techstackicons/java-svgrepo-com.svg",
        techstackname: "Java"
    },
    {
        icon: "techstackicons/react-svgrepo-com.svg",
        techstackname: "Python"
    },
    {
        icon: "techstackicons/react-svgrepo-com.svg",
        techstackname: "Javascript"
    },
    {
        icon: "techstackicons/react-svgrepo-com.svg",
        techstackname: "NextJS"
    },
    {
        icon: "techstackicons/react-svgrepo-com.svg",
        techstackname: "MongoDB"
    },
    {
        icon: "techstackicons/react-svgrepo-com.svg",
        techstackname: "HTML/CSS"
    },
    {
        icon: "techstackicons/react-svgrepo-com.svg",
        techstackname: "OpenCV"
    },
    {
        icon: "techstackicons/react-svgrepo-com.svg",
        techstackname: "Scikit-Image"
    },
    {
        icon: "techstackicons/react-svgrepo-com.svg",
        techstackname: "Tailwind CSS"
    },
    {
        icon: "techstackicons/react-svgrepo-com.svg",
        techstackname: "Discord API"
    },
        {
        icon: "techstackicons/react-svgrepo-com.svg",
        techstackname: "Figma"
    },
        {
        icon: "techstackicons/react-svgrepo-com.svg",
        techstackname: "VSCode"
    },
        {
        icon: "techstackicons/react-svgrepo-com.svg",
        techstackname: "IntelliJ IDEA"
    },
        {
        icon: "techstackicons/react-svgrepo-com.svg",
        techstackname: "GitHub"
    },

];
    return (
        <div className="flex flex-wrap justify-center gap-2"> 
            {tiles.map((tile, index) => (
                <div key={index} className="backdrop-blur-md bg-white/30 p-5 rounded-lg shadow-xl flex flex-col w-full max-w-sm sm:w-80">
                    <div className="relative p-5 w-full h-20 mb-4 rounded-lg overflow-hidden">
                        <Image
                            src={tile.icon}
                            alt={tile.techstackname}
                            fill
                            className="object-fill"
                        />
                    </div>
                    <h3 className={`text-center text-xl font-bold mb-1 text-gray-800 ${Ahsing?.className || ''}`}>
                        {tile.techstackname}
                    </h3>
                </div>
            ))}
        </div>
    );
};

export default TechStack;