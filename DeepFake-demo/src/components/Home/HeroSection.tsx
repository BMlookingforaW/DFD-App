import { Link } from "react-router-dom";
import heroGif from "../../assets/HomePageAssest.gif"; 

const HeroSection = () => {
  return (
    <section className="bg-[#2e1d45] text-white py-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Text Content */}
        <div className="w-full md:w-[40%] text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Detect <span className="text-orange-300">Deepfakes</span><br /> in Seconds
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            A powerful <span className="text-orange-300 font-medium">AI tool</span> to uncover manipulated media and raise deepfake awareness.
          </p>
          <Link to="/detect">
            <button className="bg-[#ff845a] hover:bg-orange-500 text-white px-8 py-3 rounded-lg text-lg font-semibold shadow-md transition-transform hover:scale-105">
              Try It Now →
            </button>
          </Link>
        </div>

        {/* Right GIF Image */}
        <div className="w-full md:w-[60%] flex justify-center">
          <img
            src={heroGif}
            alt="Deepfake detection animation"
            className="w-full max-w-2xl object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
