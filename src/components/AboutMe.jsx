import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import book from "../assets/book.jpeg";
import madrid from "../assets/madrid.png";
import "./Eyes.css";
import { MdSportsTennis } from "react-icons/md";
import {} from "react-icons/fa";
import {
  FaBook,
  FaToolbox,
  FaNodeJs,
  FaReact,
  FaJs,
  FaPython,
  FaCss3Alt,
  FaHtml5,
  FaGitAlt,
  FaAws,
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import avatarImage from "../assets/bitmoji.png";
import { RiFlutterFill } from "react-icons/ri";
import { PiFileSql } from "react-icons/pi";
import { SiDart } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiExpress } from "react-icons/si";

import "./AboutMe.css";

const skillsRow1 = [
  { name: "Node JS", icon: FaNodeJs },
  { name: "React", icon: FaReact },
  { name: "JavaScript", icon: FaJs },
  { name: "Python", icon: FaPython },
  { name: "CSS", icon: FaCss3Alt },
  { name: "HTML", icon: FaHtml5 },
];

const skillsRow2 = [
  { name: "Git", icon: FaGitAlt },
  { name: "Flutter", icon: RiFlutterFill },
  { name: "AWS", icon: FaAws },
  { name: "MongoDB", icon: SiMongodb },
  { name: "SQL", icon: PiFileSql },
  { name: "Dart", icon: SiDart },
  { name: "Firebase", icon: IoLogoFirebase },
  { name: "Express", icon: SiExpress },
];
// Eyes Component
function Eyes() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const calculatePupilPosition = (eyeX, eyeY) => {
    const deltaX = mousePosition.x - eyeX;
    const deltaY = mousePosition.y - eyeY;
    const angle = Math.atan2(deltaY, deltaX);
    const distance = Math.min(15, Math.hypot(deltaX, deltaY));
    const x = distance * Math.cos(angle);
    const y = distance * Math.sin(angle);
    return { x, y };
  };

  return (
    <span className="eye-container">
      <div className="eye">
        <div
          className="pupil"
          style={{
            transform: `translate(${calculatePupilPosition(100, 100).x}px, ${
              calculatePupilPosition(100, 100).y
            }px)`,
          }}
        ></div>
      </div>
      <div className="eye">
        <div
          className="pupil"
          style={{
            transform: `translate(${calculatePupilPosition(200, 100).x}px, ${
              calculatePupilPosition(200, 100).y
            }px)`,
          }}
        ></div>
      </div>
    </span>
  );
}

const projects = [
  { title: "Hiking", emoji: "⛰️", left: "10%", top: "10%" },
  { title: "Movies", emoji: "▶️", left: "50%", top: "50%" },
  { title: "Traveling", emoji: "🛬 ", left: "55%", top: "20%" },
  { title: "Sports", emoji: "🏓", left: "30%", top: "30%" },
  { title: "Cooking", emoji: "🍳", left: "55%", top: "70%" },
  { title: "Cycling", emoji: "🚲", left: "15%", top: "60%" },
];

function DraggableProject({ project, containerSize }) {
  const [dragConstraints, setDragConstraints] = useState(null);
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current && containerSize.width && containerSize.height) {
      const element = elementRef.current;
      setDragConstraints({
        left: (-parseFloat(project.left) / 100) * containerSize.width,
        top: (-parseFloat(project.top) / 100) * containerSize.height,
        right:
          containerSize.width -
          (parseFloat(project.left) / 100) * containerSize.width -
          element.offsetWidth,
        bottom:
          containerSize.height -
          (parseFloat(project.top) / 100) * containerSize.height -
          element.offsetHeight,
      });
    }
  }, [containerSize, project.left, project.top]);

  return (
    <motion.div
      ref={elementRef}
      drag
      dragMomentum={false}
      dragElastic={0}
      dragConstraints={dragConstraints}
      style={{
        position: "absolute",
        left: project.left,
        top: project.top,
      }}
      className="inline-flex items-center gap-2 px-6 bg-CustomDarkGrey rounded-full py-1.5"
    >
      <span>{project.emoji}</span>
      <p>{project.title}</p>
    </motion.div>
  );
}

// Main Component
function AboutMe1() {
  const [isSmScreen, setIsSmScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsSmScreen(window.innerWidth >= 640); // 640px is the 'sm' breakpoint
    };

    handleResize(); // Check size on component mount
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const highlightLetter = (letter, index) => (
    <span
      key={`letter-${index}`}
      className="transition duration-300 hover:text-white"
    >
      {letter}
    </span>
  );

  const glimpse = "A ".split("").map(highlightLetter);
  const glimpse2 = " INTO MY WORLD.".split("").map(highlightLetter);
  const glimpse3 = "LOOK INTO MY WORLD.".split("").map(highlightLetter);

  const containerRef = useRef(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (containerRef.current) {
      const updateSize = () => {
        setContainerSize({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      };
      updateSize();
      window.addEventListener("resize", updateSize);
      return () => window.removeEventListener("resize", updateSize);
    }
  }, []);

  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center p-4">
      {" "}
      {/* Reduced overall padding */}
      <div className="section1">
        <h2 className="text-customGray sm:text-[7rem] md:text-[10rem] text-[3.5rem] font-bebas">
          {isSmScreen && (
            <>
              {glimpse}
              {<Eyes />}
              {glimpse2}
            </>
          )}
          {!isSmScreen && glimpse3}
        </h2>
      </div>
      <div className="section2 sm:grid sm:grid-cols-3 sm:gap-4 text-white sm:max-w-5xl flex flex-col w-full gap-8">
        {" "}
        {/* Reduced max-width and gap */}
        <div className="inner1 bg-customBlack p-4 flex flex-col justify-start items-start rounded-xl col-span-1 brightness-75 h-[275px]">
          {" "}
          {/* Reduced height and padding */}
          <h1 className="text-2xl font-bold mb-2 flex items-start">
            {" "}
            {/* Reduced font size */}
            <FaBook className="mr-2 mt-1 ml-1 text-white" />
            My Reads
          </h1>
          <p className="text-sm my-2 mb-4 ml-2 text-center">
            {" "}
            {/* Reduced font size and margin */}
            The book I&apos;m currently reading is:
          </p>
          <div className="flex justify-center items-center w-full">
            <img
              src={book}
              alt="book"
              className="h-40 rounded-3xl ml-2 bg-center"
            />
          </div>
        </div>
        <div className="inner2 bg-customBlack rounded-xl col-span-2 overflow-hidden p-4 brightness-75 h-[250px]">
          {" "}
          {/* Reduced height and padding */}
          <h1 className="text-2xl font-bold mb-2 flex items-center">
            {" "}
            {/* Reduced font size */}
            <FaToolbox className="mr-2 text-white" />
            My Toolbox
          </h1>
          <p className="text-sm my-4 mb-6">
            Here are some of the tools I use
          </p>{" "}
          {/* Reduced font size and margin */}
          <div className="skills-container space-y-6">
            {" "}
            {/* Reduced space between rows */}
            <div className="w-full overflow-hidden">
              <motion.div
                className="flex"
                animate={{ x: ["0%", "-100%"] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 10,
                    ease: "linear",
                  },
                }}
              >
                {[...skillsRow1, ...skillsRow1].map((skill, index) => (
                  <div
                    key={`skill1-${index}`}
                    className="w-32 flex-shrink-0 px-2"
                  >
                    <div className="bg-customGray bg-opacity-10 p-2 rounded-lg h-full flex flex-col items-center justify-center">
                      <skill.icon className="text-xl mb-1 text-cyan-400" />
                      <p className="text-xs text-center">{skill.name}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            <div className="w-full overflow-hidden">
              <motion.div
                className="flex"
                animate={{ x: ["-100%", "0%"] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 10,
                    ease: "linear",
                  },
                }}
              >
                {[...skillsRow2, ...skillsRow2].map((skill, index) => (
                  <div
                    key={`skill2-${index}`}
                    className="w-32 flex-shrink-0 px-2"
                  >
                    <div className="bg-customGray bg-opacity-10 p-2 rounded-lg h-full flex flex-col items-center justify-center">
                      <skill.icon className="text-xl mb-1 text-cyan-400" />
                      <p className="text-xs text-center">{skill.name}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
        <div className="inner3 bg-customBlack rounded-xl col-span-2 p-4 relative brightness-75 h-[250px]">
          {" "}
          {/* Reduced height and padding */}
          <h1 className="text-2xl font-bold mb-2 flex items-center">
            {" "}
            {/* Reduced font size */}
            <MdSportsTennis className="mr-2 text-white" /> {/* Icon */}
            Beyond the code
          </h1>
          <p className="text-sm mb-2">
            {" "}
            {/* Reduced font size and margin */}
            Feel free to play around with some of my hobbies haha
          </p>
          <div
            ref={containerRef}
            className="drag-drop relative h-[175px] border border-gray-700 rounded-lg"
          >
            {projects.map((project, index) => (
              <DraggableProject
                key={`project-${index}`}
                project={project}
                containerSize={containerSize}
              />
            ))}
          </div>
        </div>
        <div className="inner4 bg-customBlack rounded-3xl col-span-1 overflow-hidden h-[250px] brightness-75 relative mt-4 flex justify-center items-center sm:flex-none">
          {" "}
          {/* Reduced height */}
          <img
            src={madrid}
            alt="map"
            className="md:w-full md:h-full object-cover grayscale brightness-75 w-80 h-60 rounded-3xl"
          />
          <div className="avatar-container">
            <div className="avatar-glow"></div>
            <img src={avatarImage} alt="Avatar" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe1;
