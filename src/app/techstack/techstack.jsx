import Image from 'next/image';

const TechStack = ({ Ahsing, DMSans }) => {
    const tiles = [
        {
            icon: "techstackicons/java-icon (1).svg",
            techstackname: "Java",
            hoverColor: "hue-rotate-[20deg] saturate-150"
        },
        {
            icon: "techstackicons/python-svgrepo-com.svg",
            techstackname: "Python",
            hoverColor: "hue-rotate-[60deg] saturate-150"
        },
        {
            icon: "techstackicons/js-svgrepo-com.svg",
            techstackname: "Javascript",
            hoverColor: "hue-rotate-[45deg] saturate-150"
        },
        {
            icon: "techstackicons/tailwind-svgrepo-com.svg",
            techstackname: "Tailwind CSS",
            hoverColor: "hue-rotate-[180deg] saturate-150"
        },
        {
            icon: "techstackicons/nextjs-svgrepo-com.svg",
            techstackname: "NextJS",
            hoverColor: "hue-rotate-[0deg] saturate-150 brightness-110"
        },
        {
            icon: "techstackicons/mongodb-svgrepo-com.svg",
            techstackname: "MongoDB",
            hoverColor: "hue-rotate-[90deg] saturate-150"
        },
        {
            icon: "techstackicons/opencv-svgrepo-com.svg",
            techstackname: "OpenCV",
            hoverColor: "hue-rotate-[200deg] saturate-150"
        },
        {
            icon: "techstackicons/discord-icon-svgrepo-com.svg",
            techstackname: "Discord API",
            hoverColor: "hue-rotate-[250deg] saturate-150"
        },
    {
            icon: "techstackicons/image.svg",
            techstackname: "Scikit-Image",
            hoverColor: "hue-rotate-[270deg] saturate-150"
        },
        {
            icon: "techstackicons/figma-svgrepo-com.svg",
            techstackname: "Figma",
            hoverColor: "hue-rotate-[300deg] saturate-150"
        },
        {
            icon: "techstackicons/vscode-svgrepo-com.svg",
            techstackname: "VSCode",
            hoverColor: "hue-rotate-[220deg] saturate-150"
        },
        {
            icon: "techstackicons/jb-intellij-idea-svgrepo-com.svg",
            techstackname: "IntelliJ IDEA",
            hoverColor: "hue-rotate-[30deg] saturate-150"
        },
        {
            icon: "techstackicons/github-142-svgrepo-com.svg",
            techstackname: "GitHub",
            hoverColor: "hue-rotate-[0deg] saturate-100 brightness-110 contrast-110"
        },
        {
            icon: "techstackicons/blender-svgrepo-com.svg",
            techstackname: "Blender",
            hoverColor: "hue-rotate-[20deg] saturate-150 brightness-120"
        },
        {
            icon: "techstackicons/adobe-creative-cloud-svgrepo-com.svg",
            techstackname: "Adobe Suite",
            hoverColor: "hue-rotate-[350deg] saturate-150 brightness-110"
        },
        {
            icon: "techstackicons/DaVinci_Resolve_17_logo.svg",
            techstackname: "DaVinci Resolve",
            hoverColor: "hue-rotate-[200deg] saturate-150 brightness-110"
        },
        {
            icon: "techstackicons/canva-icon.svg",
            techstackname: "Canva",
            hoverColor: "hue-rotate-[270deg] saturate-150 brightness-115"
        },
    ];

    return (
        <div>
        <div className="flex flex-col items-center justify-center p-5">
            <h2 className={`text-3xl font-bold mb-4 text-gray-800 ${Ahsing?.className || ''}`}>
                My "Tech Stack"  </h2>
            <p className={`text-gray-700 text-lg max-w-2xl text-center ${DMSans?.className || ''}`}>
                These are some of the languages and tools I am comfortable with ‼️ </p>
                </div>
        <div className="flex flex-wrap justify-center gap-2"> 
            {tiles.map((tile, index) => (
                <div 
                    key={index} 
                    className="group backdrop-blur-md bg-white/30 p-5 rounded-lg shadow-xl flex flex-col w-full max-w-sm sm:w-80 transition-all duration-300 hover:bg-white/40 hover:shadow-2xl hover:scale-105 cursor-pointer"
                >
                    <div className="relative p-5 w-full h-20 mb-4 rounded-lg overflow-hidden">
                        <Image
                            src={tile.icon}
                            alt={tile.techstackname}
                            fill
                            className={`object-fill transition-all duration-300 grayscale group-hover:grayscale-0 group-hover:${tile.hoverColor} group-hover:drop-shadow-lg`}
                        />
                    </div>
                    <h3 className={`text-center text-xl font-bold mb-1 text-gray-800 transition-colors duration-300 group-hover:text-gray-900 ${Ahsing?.className || ''}`}>
                        {tile.techstackname}
                    </h3>
                </div>
            ))}
        </div>
        </div>
    );
};

export default TechStack;