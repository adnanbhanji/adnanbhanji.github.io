import ArrowAnimation from "./ArrowAnimation";

function Home() {
  const highlightLetter = (letter, index) => (
    <span
      key={`letter-${index}`}
      className="transition duration-300 hover:text-white"
    >
      {letter}
    </span>
  );

  const softwareAI = "SOFTWARE & AI".split("").map(highlightLetter);
  const engineer = "ENGINEER".split("").map(highlightLetter);

  const handleContactClick = () => {
    window.location.href = "mailto:abhanji.ieu2021@student.ie.edu";
  };

  return (
    <div className="bg-black min-h-screen text-gray-400 px-4 sm:px-8 md:px-12 py-6 sm:py-10 flex flex-col">
      <header className="flex sm:flex-row justify-between items-start mb-8 sm:mb-16">
        <div className="mb-4 sm:mb-0">
          <h2 className="text-sm sm:text-md font-semibold">ADNAN</h2>
          <h2 className="text-sm sm:text-md font-semibold">BHANJI</h2>
        </div>
        <div className="text-sm sm:text-md font-semibold mb-4 sm:mb-0">
          <p>SOFTWARE ENGINEER</p>
          <p>Based in Madrid, Spain</p>
        </div>
        <button
          onClick={handleContactClick}
          className="border border-gray-400 rounded-full px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-md font-semibold hover:bg-gray-400 hover:text-black transition-colors duration-300"
        >
          CONTACT
        </button>
      </header>

      <main className="flex-grow flex flex-col justify-center text-customGray">
        <h1 className="text-[15vw] sm:text-[20vw] leading-[0.8] font-bold font-bebas pb-6 sm:pb-12">
          {softwareAI}
        </h1>
        <div className="flex flex-col lg:flex-row lg:space-x-8 2xl:space-x-32 items-start">
          <h1 className="text-[15vw] sm:text-[18vw] leading-[0.8] font-bold font-bebas mb-4 sm:mb-0">
            {engineer}
          </h1>
          <div className="max-w-lg">
            <p className="text-base sm:text-lg font-sans mb-12">
              <span className="font-semibold text-xs sm:text-sm">ABOUT: </span>
              Data-driven Computer Science student with experience in several
              domains of software engineering, including Web & App Development,
              AI (Machine Learning, NLP, & Recommendation Systems), and Data.
            </p>
            <div className="flex justify-between items-center">
              <p className="text-base sm:text-lg font-semibold">Scroll down</p>
              <ArrowAnimation />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
