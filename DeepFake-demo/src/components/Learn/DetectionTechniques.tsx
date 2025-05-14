const methods = [
  "Blink detection & eye inconsistencies",
  "Head pose and motion tracking",
  "Frequency domain analysis",
  "Facial landmarks & geometry",
  "CNN+LSTM deep learning models"
];

const DetectionTechniques = () => (
  <section className="py-16 px-6 bg-white text-center">
    <h2 className="text-3xl font-bold mb-6">Detection Techniques</h2>
    <ul className="max-w-xl mx-auto grid gap-4 text-left list-disc list-inside text-gray-700">
      {methods.map((method, i) => (
        <li key={i}>{method}</li>
      ))}
    </ul>
  </section>
);

export default DetectionTechniques;
