import { useEffect, useRef } from "react";

const reasons = [
  {
    title: "Misinformation",
    desc: "Deepfakes spread false content disguised as real news or events, fueling misinformation."
  },
  {
    title: "Political Manipulation",
    desc: "Fabricated speeches or actions are used to influence elections and global perception."
  },
  {
    title: "Identity Theft",
    desc: "Criminals use deepfakes to impersonate people in video calls or audio, bypassing verification."
  },
  {
    title: "Erosion of Trust",
    desc: "Even real content is questioned when fake content looks real — trust in media degrades."
  },
  {
    title: "Blackmail & Scams",
    desc: "Victims are targeted with fake explicit content or impersonation scams for extortion."
  }
];



const DeepfakeImpact = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.5; // adjust speed
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
          Why Deepfakes Matter
        </h2>
        <p className="text-gray-200 text-md">
          Deepfakes threaten digital truth, security, and identity — here's how.
        </p>
      </div>

      {/* Auto-scrolling horizontal cards */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth px-4 md:px-8"
      >
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="min-w-[260px] h-[360px] bg-[#3a255c] border border-orange-300 rounded-xl p-6 flex flex-col justify-center text-center shadow-lg flex-shrink-0"
          >
            <h3 className="text-xl font-bold text-orange-300 mb-3">{reason.title}</h3>
            <p className="text-sm text-gray-200">{reason.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12">
        <a href="/learn">
          <button className="bg-orange-300 hover:bg-orange-400 text-[#2e1d45] font-semibold px-6 py-3 rounded-md shadow-md transition hover:scale-105">
            Learn More About Deepfakes →
          </button>
        </a>
      </div>
    </section>
  );
};

export default DeepfakeImpact;

