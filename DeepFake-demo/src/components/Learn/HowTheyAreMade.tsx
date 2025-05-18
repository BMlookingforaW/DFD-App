import infographic from "../../assets/HowDeepFakeWorks.png";
const HowTheyAreMade = () => {
  return (
    <section className="min-h-screen bg-white text-white py-24 px-6 md:px-12 text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-orange-400 mb-16">
          How Are Deepfakes Created?
        </h2>

        <img
          src={infographic}
          alt="How Deepfakes Are Created Infographic"
          className="w-full max-w-6xl mx-auto rounded-xl shadow-2xl"
        />
      </div>
    </section>
  );
};

export default HowTheyAreMade;
