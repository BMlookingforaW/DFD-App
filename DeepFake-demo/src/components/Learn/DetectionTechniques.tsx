import { useEffect, useRef } from "react";

const methods = [
  {
    title: "Blink Detection",
    desc: "Inconsistencies in eye blinking frequency or unnatural patterns reveal synthetic faces."
  },
  {
    title: "Head Pose Tracking",
    desc: "Tracking head movement and angles helps detect misalignment between body and synthetic face."
  },
  {
    title: "Frequency Analysis",
    desc: "Real images and deepfakes differ in their frequency domain — subtle distortions are detectable."
  },
  {
    title: "Facial Geometry",
    desc: "Checking landmarks and face symmetry uncovers unnatural facial constructions."
  },
  {
    title: "CNN + LSTM Models",
    desc: "Deep learning architectures analyze both spatial and temporal patterns for high accuracy."
  }
];

const DetectionTechniques = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.5;
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

    const scroll = () => {
      if (!scrollContainer) return;

      scrollAmount += scrollSpeed;
      if (scrollAmount >= maxScroll) scrollAmount = 0;

      scrollContainer.scrollTo({
        left: scrollAmount,
        behavior: "smooth"
      });
    };

    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#2e1d45] py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold text-orange-300 mb-4">
          Detection Techniques
        </h2>
        <p className="text-gray-200 text-md">
          Our platform uses cutting-edge visual and deep learning techniques to catch deepfakes.
        </p>
      </div>

      {/* Auto-scrolling technique cards */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth px-4 md:px-8"
      >
        {methods.map((method, index) => (
          <div
            key={index}
            className="min-w-[260px] h-[360px] bg-[#3a255c] border border-orange-300 rounded-xl p-6 flex flex-col justify-center text-center shadow-lg flex-shrink-0"
          >
            <h3 className="text-xl font-bold text-orange-300 mb-3">{method.title}</h3>
            <p className="text-sm text-gray-200">{method.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DetectionTechniques;
