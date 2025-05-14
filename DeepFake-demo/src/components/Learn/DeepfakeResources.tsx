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
  }
];

const DeepfakeResources = () => (
  <section className="py-16 px-6 bg-gray-100 text-center">
    <h2 className="text-3xl font-bold mb-6">Explore Datasets & Research</h2>
    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {resources.map((res, i) => (
        <a
          key={i}
          href={res.url}
          target="_blank"
          rel="noreferrer"
          className="block bg-white p-6 rounded-lg shadow hover:shadow-md transition"
        >
          <h3 className="text-xl font-semibold text-blue-700 mb-2">{res.name}</h3>
          <p className="text-gray-700">{res.desc}</p>
        </a>
      ))}
    </div>
  </section>
);

export default DeepfakeResources;
