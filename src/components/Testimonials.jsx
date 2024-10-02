import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ignacio from "../assets/ignacio.jpeg";
import alvaro from "../assets/alvaro.jpeg";
import carlosm from "../assets/carlosm.jpeg";
import miguel from "../assets/miguel.jpeg";
import martin from "../assets/martin.jpeg";
import claudia from "../assets/claudia.jpeg";
import carlosf from "../assets/carlosf.jpeg";

const testimonials = [
  {
    text: "Adnan is an amazing AI student with a clear focus on added value. I am very proud to having him as my student and today as an AI engeneering analyst. ",
    name: "Carlos Marquerie Tamayo 🤫☘️ ",
    position: "CEO of Alfinity Technologies",
    image: carlosm,
  },
  {
    text: "Adnan is a standout student who possesses remarkable skills in mathematics and analytical thinking. He consistently demonstrates a high level of effort and dedication in everything he does. Adnan has exceptional analytical thinking skills. He has a unique ability to approach problems methodically, break them down into manageable components, and finally find the solution. He also has the capability for seeing patterns and making connections based on the content of the subject. In sum I had the privilege of teaching Linear Algebra to Adnan in IE University. He was an outstanding student demonstrating mathematical and analytical skills and strong work in research works, exercises and exams, achieving excellent grades in this course. I am confident that Adnan would excel in any professional role and recommend him without hesitation.",
    name: "Ignacio Zubizarreta Ballesteros",
    position: "Math Professor at IE University",
    image: ignacio,
  },
  {
    text: "Adnan has proven to be an excellent engineer very proactive and agile in its development with very fast learning and independence to achieve the projects deadlines and expectations. We have been very satisfied to have Adnan working with us in the summer and we would be open to have him permanently when he finalize the studies. During my teaching in IE he was also very good and motivated student. We wish you very well Adnan",
    name: "Alvaro Sanchez",
    position: "CEO Integrasys",
    image: alvaro,
  },
  {
    text: "Working alongside Adnan has been a genuine pleasure, and I have every confidence that he would be an invaluable addition to any organization. Adnan consistently demonstrates unwavering dedication to his work, reflecting a profound commitment to achieving both individual and team objectives. Notably, Adnan excels in executing entrusted tasks with remarkable efficiency. He adeptly handles tools and technologies, whether they are familiar or new to him, demonstrating a keen ability to adapt seamlessly to evolving requirements. Adnan's profound enthusiasm and passion for software development are truly commendable, rendering collaboration with him exceptionally gratifying. His work exudes a consistently positive attitude, both in solitary tasks and collaborative endeavors with colleagues.",
    name: "Rafael Portero Hernández",
    position: "Senior Embedded SW Engineer en Integrasys S.A.",
    image: "/path/to/michael-image.jpg",
  },

  {
    text: "I am writing to highly recommend Adnan Bhanji as an exceptional student. I was Adnan's teacher for the subjects Calculus-0 and Calculus in the Bachelor In Computer Science and Artificial Intelligence, where he was among the top students. During our interaction Adnan consistently demonstrated a deep understanding of the subject matter, excelled in problem-solving, and actively engaged in class discussions. Adnan is punctual, responsible and easy to deal with. I am confident he will excel in any future academic or professional pursuits.",
    name: "Miguel Vaquero",
    position: "Assistant Professor at IE University",
    image: miguel,
  },
  {
    text: "Adnan's software engineering skills are exceptional, especially given his age. During his internship, he quickly adapted to new technologies, enhancing our team's efficiency. His optimizations improved processing speed by 15% and boosted user experience reviews by 25%. I strongly recommend Adnan for software engineering roles, confident in his continued contributions to any team.",
    name: "Martin Sacchi",
    position: "CEO at RaivenLab",
    image: martin,
  },
  {
    text: "Adnan was one of the best students of my Entrepreneurship course 2023. His overall performance was excellent, actively contributing to class discussions providing well thought out views. He got outstanding reviews from his team members, emphasizing its willingness to help everyone and make sure tasks were delivered on time and with the best quality!",
    name: "Claudia Caso Fernández del Amo",
    position: "CEO, Entrepreneur, Board Advisor, Professor",
    image: claudia,
  },
  {
    text: "With Adnan, we were able to understand and have integrations to different intelligent chatbots, tools that are relevant to consider today to maintain added value in each business, using technologies and tools such as: artificial intelligence, python, pandas, sql, openai. Thanks to its consistency, review and implementations with good practices, it currently allows us to manage different APIs that are easy to maintain and continuous improvements.",
    name: "Carlos Flores Guzmán",
    position: "Cofundador DataQu - SolMat",
    image: carlosf,
  },
  // Add more testimonials here
];

function Testimonials() {
  const highlightLetter = (letter, index) => (
    <span
      key={`letter-${index}`}
      className="transition duration-300 hover:text-white"
    >
      {letter}
    </span>
  );

  const testimonialTitle = "TESTIMONIALS.".split("").map(highlightLetter);

  const trimText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-between p-8">
      <div className="w-full">
        <h1 className="sm:text-[7rem] md:text-[10rem] text-[3.5rem] font-bold text-customGray mb-4 font-bebas leading-none text-center w-full">
          {testimonialTitle}
        </h1>
        <p className="text-xl text-gray-300 mb-16 text-center">
          Let their words paint the picture of my journey
        </p>
        <div className="w-full overflow-hidden">
          <motion.div
            className="flex"
            animate={{
              x: ["0%", "-100%"],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4"
              >
                <div className="bg-customGray bg-opacity-10 p-6 rounded-lg h-full flex flex-col">
                  <p className="text-gray-300 text-md mb-4 flex-grow">
                    {trimText(testimonial.text, 50)}
                  </p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="text-white font-semibold">
                        {testimonial.name}
                      </h3>
                      <p className="text-customGray text-sm">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/adnanbhanji/recommendations"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 text-lg mt-4 inline-block"
                  >
                    View More
                  </a>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <footer className="w-full mt-16 flex justify-center items-center">
        <div className="flex space-x-8">
          <a
            href="https://github.com/adnanbhanji"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://linkedin.com/in/adnanbhanji"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="mailto:abhanji.ieu2021@student.ie.edu"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <MdEmail size={30} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Testimonials;
