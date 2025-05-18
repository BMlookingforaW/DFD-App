import { useEffect, useRef } from "react";

const resources = [
  {
    name: "FaceForensics++",
    url: "https://github.com/ondyari/FaceForensics",
    desc: "A benchmark dataset for detecting manipulated facial videos."
  },
  {
    name: "Celeb-DF",
    url: "https://github.com/yuezunli/Celeb-DF",
    desc: "High-quality celebrity deepfake dataset for forensic research."
  },
  {
    name: "DFDC Dataset",
    url: "https://ai.facebook.com/datasets/dfdc",
    desc: "Deepfake Detection Challenge dataset by Facebook AI."
  },
  {
    name: "DeeperForensics-1.0",
    url: "https://github.com/EndlessSora/DeeperForensics-1.0",
    desc: "A real-world deepfake dataset designed for robustness testing."
  },
  {
    name: "UADFV Dataset",
    url: "https://github.com/nii-yamagishilab/Capsule-Forensics",
    desc: "One of the earliest video-based deepfake detection datasets."
  },
  {
    name: "Synthesia Research",
    url: "https://www.synthesia.io/research",
    desc: "Research-driven tools and ethics insights on synthetic media generation."
  },
  {
    name: "Google Deepfake Detection",
    url: "https://ai.googleblog.com/2019/09/contributing-data-to-deepfake.html",
    desc: "Google's contribution of deepfake videos for detection research."
  }
];

const DeepfakeResources = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  const container = scrollRef.current;
  if (!container) return;

  let scrollPos = container.scrollWidth - container.clientWidth; // start at far right
  const scrollSpeed = 0.5;

  const scroll = () => {
    if (!container) return;
    scrollPos -= scrollSpeed;
    if (scrollPos <= 0) scrollPos = container.scrollWidth - container.clientWidth;

    container.scrollTo({ left: scrollPos, behavior: "smooth" });
  };

  const interval = setInterval(scroll, 30);
  return () => clearInterval(interval);
}, []);


  return (
    <section className="bg-[#2e1d45] py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold text-orange-300 mb-4">
          Explore Datasets & Research
        </h2>
        <p className="text-gray-200 text-md">
          Browse the most influential datasets used in deepfake detection research.
        </p>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth px-4 md:px-8"
      >
        {resources.map((res, i) => (
          <a
            key={i}
            href={res.url}
            target="_blank"
            rel="noreferrer"
            className="min-w-[280px] h-[260px] bg-[#3a255c] border border-orange-300 rounded-xl p-6 flex flex-col justify-between text-left shadow-lg flex-shrink-0 hover:shadow-xl transition"
          >
            <h3 className="text-lg font-bold text-orange-300 mb-2">{res.name}</h3>
            <p className="text-sm text-gray-200">{res.desc}</p>
            <span className="mt-4 text-sm text-orange-200 underline">
              View on GitHub →
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default DeepfakeResources;
