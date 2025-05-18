
const steps = [
  {
    title: "1. Upload Image",
    desc: "Users upload an image file containing a single clear face. The system ensures valid format and performs preliminary checks for lighting and resolution.",
    detail:
      "We use MTCNN to detect and crop the face. Images are resized and normalized before being passed to the AI model.",
  },
  {
    title: "2. Analyze",
    desc: "The face is analyzed by our deep learning model trained to detect visual inconsistencies common in deepfakes.",
    detail:
      "We use a CNN-based model fine-tuned to recognize signs like unnatural blending, inconsistent lighting, and spatial artifacts. The image goes through feature extraction and classification layers.",
  },
  {
    title: "3. Get Results",
    desc: "The model outputs a binary prediction (real/fake) along with a confidence score.",
    detail:
      "We display this result back to the user with an explanation. Confidence scores above 90% usually indicate high certainty, while scores near 50% may suggest a borderline case.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-white text-black py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-orange-400 mb-16 text-center">
          How It Works
        </h2>
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start gap-8 bg-[#3a255c] border-l-4 border-orange-300 p-8 rounded-lg shadow-md"
            >
              <div className="text-5xl font-black text-orange-300 w-16 text-center">
                {index + 1}
              </div>
              <div>
                <h3 className="text-2xl text-orange-400 font-bold mb-2">{step.title}</h3>
                <p className="text-gray-200 text-md mb-3">{step.desc}</p>
                <p className="text-gray-400 text-sm">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
