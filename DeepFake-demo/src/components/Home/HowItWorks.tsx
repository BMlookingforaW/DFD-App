const steps = [
  { title: "1. Upload Image", desc: "Choose an image to test for deepfake content." },
  { title: "2. Analyze", desc: "Our AI model examines facial features and inconsistencies." },
  { title: "3. Get Results", desc: "See whether it's real or fake — with confidence score." }
];

const HowItWorks = () => {
  return (
    <section className="bg-white py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-10">How It Works</h2>
      <div className="flex flex-col md:flex-row justify-center items-start gap-12 max-w-4xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="flex-1">
            <div className="text-4xl mb-4 text-blue-600 font-black">{step.title}</div>
            <p className="text-gray-600">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
