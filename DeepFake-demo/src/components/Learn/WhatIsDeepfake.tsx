import deepfakeDemo from "../../assets/large-thumbnail20250217-397366-ranxj9.mp4"; // or GIF

const WhatIsDeepfake = () => {
  return (
    <section className="min-h-screen bg-[#2e1d45] text-white py-28 px-6 md:px-20 flex items-center">
      <div className="w-full max-w-[1600px] mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Left Content */}
        <div className="w-full md:w-[45%] text-left">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight text-orange-300 mb-8">
            What is a Deepfake?
          </h2>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-4">
            A <span className="text-orange-300 font-semibold">deepfake</span> is synthetic media generated using AI that makes someone appear to say or do something they never did. 
            It uses advanced techniques like <span className="text-orange-300 font-semibold">Generative Adversarial Networks (GANs)</span> to create hyper-realistic video or audio content.
          </p>
          <p className="text-md md:text-lg text-gray-300">
            Deepfakes are increasingly used in misinformation, impersonation, scams, and more — threatening digital trust and authenticity. Our platform helps you recognize and understand them.
          </p>
        </div>

        {/* Right Video */}
        <div className="w-full md:w-[55%] flex justify-center">
          <video
            src={deepfakeDemo}
            autoPlay
            muted
            loop
            playsInline
            className="w-full max-w-[720px] h-auto rounded-xl shadow-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatIsDeepfake;
