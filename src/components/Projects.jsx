import { useState, useEffect } from "react";
import chatbot_project from "../assets/chatbot_project.png";
import netflix_project from "../assets/netflix_project.jpg";
import nft_project from "../assets/nft_project.png";
import jarvis_project from "../assets/jarvis_project.gif";
import bank_project from "../assets/bank_project.png";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { SiHuggingface } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { AiFillOpenAI } from "react-icons/ai";
import { SiGooglegemini } from "react-icons/si";
import { SiXrp } from "react-icons/si";
import { SiStreamlit } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaVuejs } from "react-icons/fa";
import { SiGithubactions } from "react-icons/si";
import { SiAzurefunctions } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { FaDocker } from "react-icons/fa";
import { DiSqllite } from "react-icons/di";
import { SiFlask } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const projectSets = [
  [
    {
      id: 1,
      image: chatbot_project,
      title: "EU Carbon Emission Chatbot",
      techIcons: [
        { name: "Python", icon: FaPython },
        { name: "HuggingFace", icon: SiHuggingface },
        { name: "Tensorflow", icon: SiTensorflow },
        { name: "Git", icon: FaGitAlt },
        { name: "AWS", icon: FaAws },
        { name: "OpenAI", icon: AiFillOpenAI },
        { name: "Gemini", icon: SiGooglegemini },
      ],
      link: "https://github.com/adnanbhanji/EU-Chatbot-Reco-System",
    },
  ],
  [
    {
      id: 2,
      image: netflix_project,
      title: "Frontend Nextflix Interface",
      techIcons: [
        { name: "React", icon: FaReact },
        { name: "JavaScript", icon: FaJs },
        { name: "CSS", icon: FaCss3Alt },
        { name: "HTML", icon: FaHtml5 },
        { name: "Git", icon: FaGitAlt },
        { name: "Tailwind", icon: RiTailwindCssFill },
      ],
      link: "https://github.com/adnanbhanji/netflix_build",
    },
  ],
  [
    {
      id: 3,
      image: nft_project,
      title: "Minting NFTs for Farmers' Data",
      techIcons: [
        { name: "XRP", icon: SiXrp },
        { name: "Python", icon: FaPython },
        { name: "HuggingFace", icon: SiHuggingface },
        { name: "Tensorflow", icon: SiTensorflow },
        { name: "Git", icon: FaGitAlt },
        { name: "AWS", icon: FaAws },
        { name: "OpenAI", icon: AiFillOpenAI },
      ],
      link: "https://github.com/beaamoo/green-elephants",
    },
  ],
  [
    {
      id: 4,
      image: jarvis_project,
      title: "Jarvis: AI Virtual Assistant",
      techIcons: [
        { name: "Python", icon: FaPython },
        { name: "Streamlit", icon: SiStreamlit },
        { name: "Redis", icon: DiRedis },
        { name: "Git", icon: FaGitAlt },
        { name: "OpenAI", icon: AiFillOpenAI },
      ],
      link: "https://github.com/IERoboticsClub/workshops/tree/main/ai-chatbot-assistant",
    },
  ],
  [
    {
      id: 5,
      image: bank_project,
      title: "End to End Banking System",
      techIcons: [
        { name: "Vue.js", icon: FaVuejs },
        { name: "GitHub Actions", icon: SiGithubactions },
        { name: "Azure Functions", icon: SiAzurefunctions },
        { name: "Azure", icon: VscAzure },
        { name: "Docker", icon: FaDocker },
        { name: "SQLite", icon: DiSqllite },
        { name: "Flask", icon: SiFlask },
      ],
      link: "https://github.com/orgs/IE-bank-team/repositories",
    },
  ],
];

function Projects() {
  const highlightLetter = (letter, index) => (
    <span
      key={`letter-${index}`}
      className="transition duration-300 hover:text-white"
    >
      {letter}
    </span>
  );

  const mywork = "MY WORK.".split("").map(highlightLetter);

  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSet();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentSetIndex]);

  const nextSet = () => {
    setDirection(1);
    setCurrentSetIndex((prevIndex) => (prevIndex + 1) % projectSets.length);
  };

  const prevSet = () => {
    setDirection(-1);
    setCurrentSetIndex(
      (prevIndex) => (prevIndex - 1 + projectSets.length) % projectSets.length
    );
  };

  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:items-start space-y-12 lg:space-y-0 lg:space-x-16">
          <div className="w-full lg:w-2/5 text-center md:text-left">
            <h2 className="sm:text-[7rem] md:text-[10rem] text-[4rem] font-bold text-customGray mb-6 font-bebas leading-none">
              {mywork}
            </h2>
            <p className="text-gray-300 text-xl mb-12">
              Check out some of my latest projects here.
            </p>
            <div className="flex justify-center md:justify-start space-x-10">
              <button
                onClick={prevSet}
                className="text-white text-xl hover:text-gray-300 transition"
              >
                ← Previous
              </button>
              <button
                onClick={nextSet}
                className="text-white text-xl hover:text-gray-300 transition"
              >
                Next →
              </button>
            </div>
          </div>
          <div
            className="w-full lg:w-3/5 relative overflow-hidden"
            style={{ height: "500px" }}
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentSetIndex}
                custom={direction}
                variants={{
                  enter: (direction) => ({
                    x: direction > 0 ? "100%" : "-100%",
                    opacity: 0,
                  }),
                  center: {
                    zIndex: 1,
                    x: 0,
                    opacity: 1,
                  },
                  exit: (direction) => ({
                    zIndex: 0,
                    x: direction < 0 ? "100%" : "-100%",
                    opacity: 0,
                  }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute w-full flex justify-center items-center"
              >
                {projectSets[currentSetIndex].map((project) => (
                  <div
                    key={project.id}
                    className="bg-customGray bg-opacity-10 rounded-lg overflow-hidden shadow-lg flex flex-col w-full h-[450px]"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[340px] object-cover"
                    />
                    <div className="p-4 flex-grow">
                      <h3 className="text-white text-2xl ">{project.title} </h3>
                      <p className="text-gray-300 text-xl mt-2">
                        {project.tech}
                      </p>
                      <div className="flex flex-wrap gap-2 justify-between items-center">
                        <div className="flex flex-wrap gap-2 justify-around">
                          {project.techIcons.map((tech, index) => (
                            <div
                              key={`tech-${project.id}-${index}`}
                              className="flex items-center p-1 relative group"
                            >
                              <tech.icon className="w-6 h-6 text-cyan-400" />
                              <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                                {tech.name}
                              </span>
                            </div>
                          ))}
                        </div>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button className="bg-cyan-300 text-black px-2 py-2 rounded-md hover:bg-cyan-500 transition flex items-center gap-2">
                            <FaGithub className="w-6 h-6 text-black" />
                            <span>View on GitHub</span>
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
