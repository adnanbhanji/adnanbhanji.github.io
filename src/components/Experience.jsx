import { useState } from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Data Engineer",
    company: "Cofrai",
    period: "2024-Present | Madrid, Spain",
    description:
      "As a Data Engineer intern at Cofrai, I focus on automating the migration of unstructured data from inspection documents into our relational database, particularly during client onboarding. I explore and implement the latest Generative AI tools to enhance data migration processes and reduce client onboarding time. Collaborating closely with mentors, I contribute to defining project goals, developing new data processing architectures, and improving system scalability and reliability in a fast-paced environment.",
  },
  {
    title: "Software Engineer",
    company: "Integrasys",
    period: "June 2023 - August 2023 | Madrid, Spain",
    description:
      "Interned as a Software Engineer at INTEGRASYS Group. Led the design and development of an Earth Observation Tool (EOT) that enhanced object detection, enabling the identification of 10,000+ 3D models on a CesiumJS map using AngularJS and Three.js. Integrated the tool with the company’s existing SaaS product, enhancing functionality, which led to its presentation at the WSBW Paris 2023 Event. Additionally, automated onboarding workflows with CI/CD pipelines using GitHub Actions and created comprehensive documentation for the EOT, reducing developer ramp-up time by 20%.",
  },
  {
    title: "AI Engineer",
    company: "Kyra Group",
    period: "March 2023 - December 2023 | Madrid, Spain",
    description:
      "Interned as an AI Engineer at Kyra Group, focusing on data and prompt engineering with various LLMs, including GPT-3.5, Bard, and Gemini. Played a key role in developing an AI ecosystem platform, enabling over 1M+ connections among five stakeholders. Additionally, created a Flutter application that integrated AI algorithms with the front-end, enhancing user interaction and accessibility.",
  },
  {
    title: "Data Engineer",
    company: "Miqazza",
    period: "June 2022 - August 2022 | Madrid, Spain",
    description:
      "Interned as a Data Intern at Miqazza in Madrid, Spain, from June 2022 to August 2022. Developed a Python algorithm using collaborative filtering to intelligently pair 250+ students with roommates, improving match accuracy by 15%. Restructured user data models in SQL to enhance data quality, storage efficiency, and retrieval speed. Analyzed student feedback and engagement metrics, identifying trends that refined the matching algorithm and increased satisfaction by 10%.",
  },
];

function Experience() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const highlightLetter = (letter, index) => (
    <span
      key={`letter-${index}`}
      className="transition duration-300 hover:text-white"
    >
      {letter}
    </span>
  );

  const experience = "EXPERIENCE.".split("").map(highlightLetter);

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="sm:text-[7rem] md:text-[10rem] text-[4rem] font-bold text-customGray mb-12 mt-12 font-bebas leading-none text-center w-full">
        {experience}
      </h1>
      <div className="container mx-auto max-w-4xl">
        <div className="relative pl-6">
          {experiences.map((exp, index) => (
            <div
              key={`experience-${index}`}
              className="mb-12 relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                className="absolute left-0 w-3 h-3 bg-customGray rounded-full -ml-8"
                initial={{ top: 8 }}
                animate={{
                  top: hoveredIndex === index ? "100%" : 8,
                  backgroundColor:
                    hoveredIndex === index ? "#FFFFFF" : "#808080",
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              ></motion.div>
              <motion.div
                className="absolute left-[-0.2rem] top-0 w-0.5 bg-customGray h-full -ml-6"
                animate={{
                  backgroundColor:
                    hoveredIndex === index ? "#05B6D3" : "#808080",
                }}
                transition={{ duration: 0.3 }}
              ></motion.div>
              <h2 className="text-2xl font-bold text-white mb-2">
                {exp.title}{" "}
                <span className="text-customGray">@{exp.company}</span>
              </h2>
              <p className="text-customGray text-lg mb-3">{exp.period}</p>
              <p className="text-gray-300 text-md">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
