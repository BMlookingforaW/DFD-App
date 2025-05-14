const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white text-center py-24 px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Detect Deepfakes in Seconds</h1>
      <p className="text-lg md:text-xl mb-6">An educational & demo platform to fight AI-generated misinformation.</p>
      <a href="/detect">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold">
          Try It Now
        </button>
      </a>
    </section>
  );
};

export default HeroSection;
