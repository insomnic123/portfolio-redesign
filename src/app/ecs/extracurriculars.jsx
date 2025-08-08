import Image from "next/image";

const ExtracurricularSection = ({ Ahsing, DMSans }) => {
  const extracurriculars = [

    {
      image: "/chronosync.png",
      title: "ChronoSync | Time Management App",
      description: "My first webapp built with NextJS, MongoDB, and Spring Boot, aimed to help high school students reclaim their time through dynamic time scheduling. Developed for ICS4U1.",
      buttonText: "Find Out More",
      buttonLink: "https://www.linkedin.com/in/qaziayan/details/projects/546090583/multiple-media-viewer/?profileId=ACoAAEhUJiwBz36I8TPx4zlrPzPzyTQ-_2LjgZk&treasuryMediaId=1737860362473",
      dateCreated: "Dec. 2024 - Jan. 2025"
    },
    {
      image: "/solaravision.jpg", 
      title: "SolaraVision | Climate Change Makers Winner",
      description: "A social enterprise centred around new, dynamic types of solar panels, aimed at making panels accessible for everyone through an all-encompassing mobile app.",
      buttonText: "See Devpost",
      buttonLink: "https://devpost.com/software/solaravision",
      topIcon: "/fourth.png",
      dateCreated: "May 2024"
    },
    {
      image: "/skib.jpg",
      title: "S.K.I.B. Autonomous Vehicle | 1st @ SciTech Fair",
      description: "Autonomous car made with P.I.D., Arduino Mega, and analysis algorithms with OpenCV and Scikit-Image. The project was aimed at optimizing the job of nurses in healthcare settings",
      buttonText: "Learn More",
      buttonLink: "https://www.linkedin.com/in/qaziayan/details/projects/170968803/multiple-media-viewer/?profileId=ACoAAEhUJiwBz36I8TPx4zlrPzPzyTQ-_2LjgZk&treasuryMediaId=1752517625785",
      topIcon: "/first.png",
      dateCreated: "May 2025 - June 2025"
    },
    {
      image: "/ppo.jpg",
      title: "Pushing People Over | 1st @ SciTech Fair & Bronze @ TSF",
      description: "A computer vision project using OpenCV developed in Gr. 9 to detect when individuals fall using four custom-coded algorithms aimed at reducing carehome deaths.",
      buttonText: "See GitHub",
      buttonLink: "https://github.com/Yes361/Fall-Detection",
      topIcon: "/first.png",
      dateCreated: "May 2023 - June 2023"
    },
    {
      image: "/Lively.png",
      title: "Live.ly | HT6 Submission",
      description: "Resource and lifeline app for unhoused individuals in Toronto to find the closest shelters, foodbanks, and various life-saving resources, using dynamic AI workflows. It was developed for Hack the 6ix using NextJS, Vellum AI, and MongoDB.",
      buttonText: "See Devpost",
      buttonLink: "https://devpost.com/software/live-ly-nvm7k8",
      dateCreated: "July 2025"
    },
    {
      image: "/YEAR IN (1).png",
      title: "CRiDO",
      description: "CRiDO is a simple browser-based game similar to cookie clicker where you can trade fake stocks. I wanted to experiment with making simple games through react, and after playing a similar simulation online, I decided to recreate it with my own twists!",
      buttonText: "Play Demo",
      buttonLink: "https://crido.vercel.app/",
      dateCreated: "August 2025"
    },
    {
      image: "/Hack the Skies (5).png",
      title: "Hack the Skies | Vice Chair & Director of Marketing",
      description: "Hack the Skies is a highschool-student run hackathon event based in Toronto, founded in 2023. The 2024 iteration featured 16 projects from 80+ participants!",
      buttonText: "Visit Site",
      buttonLink: "https://hacktheskies.com/",
      dateCreated: "Oct. 2023 - Present"
    },
    {
      image: "/oep.jpg",
      title: "Oakridge Engineering Project",
      description: "After noticing a defecit in STEM-resources in my own community, I used a grant to run a series of engineering workshops for the Oakridge riding, teaching students about the basics of engineering design :)",
      buttonText: "Learn More",
      buttonLink: "https://www.linkedin.com/in/qaziayan/details/projects/45327717/multiple-media-viewer/?profileId=ACoAAEhUJiwBz36I8TPx4zlrPzPzyTQ-_2LjgZk&treasuryMediaId=1715884764160",
      dateCreated: "Aug. 2023 - March 2024"
    }
  ];

  const handleButtonClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-16">
      <div className="text-center mb-12">
        <h2 className={`text-3xl sm:text-4xl font-bold mb-4 text-gray-800 ${Ahsing?.className || ''}`}>
          Featured Projects
        </h2>
        <p className={`text-gray-700 text-lg max-w-2xl mx-auto ${DMSans?.className || ''}`}>
          These are some of the highlight projects I've worked on, mainly technical but also some non-technical experiences 😉
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-6">
        {extracurriculars.map((activity, index) => (
          <div 
            key={index}
            className="backdrop-blur-md bg-white/30 p-5 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group relative flex flex-col w-full max-w-sm sm:w-80"
          >
            {activity.topIcon && (
              <div className="absolute top-4 left-4 z-10">
                <div className="w-12 h-12 bg-white/20 rounded-lg shadow-md p-2 flex items-center justify-center backdrop-blur-sm">
                  <Image
                    src={activity.topIcon}
                    alt={`${activity.title} icon`}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
              </div>
            )}
            <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src={activity.image}
                alt={activity.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
              {activity.dateCreated && (
                <div className="absolute bottom-2 right-2 z-10">
                  <div className={`bg-black/70 text-white px-2 py-1 rounded-md text-xs font-medium backdrop-blur-sm ${DMSans?.className || ''}`}>
                    {activity.dateCreated}
                  </div>
                </div>
              )}
            </div>
            <h3 className={`text-xl font-bold mb-3 text-gray-800 ${Ahsing?.className || ''} `}>
              {activity.title}
            </h3>
            <p className={`text-gray-700 text-sm leading-relaxed mb-4 flex-grow ${DMSans?.className || ''}`}>
              {activity.description}
            </p>
            <button
              onClick={() => handleButtonClick(activity.buttonLink)}
              className={`w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg mt-auto ${DMSans?.className || ''}`}
            >
              {activity.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtracurricularSection;