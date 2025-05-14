const HowTheyAreMade = () => (
  <section className="py-16 px-6 bg-gray-100 text-center">
    <h2 className="text-3xl font-bold mb-6">How Are Deepfakes Created?</h2>
    <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 text-left">
      {[
        {
          title: "1. Collect Face Data",
          desc: "Gather images or videos of a person’s face from multiple angles and expressions."
        },
        {
          title: "2. Train a Model",
          desc: "Use GANs or autoencoders to learn how the face behaves under different conditions."
        },
        {
          title: "3. Swap & Render",
          desc: "Apply the trained face onto another person’s body or video with facial alignment and blending."
        }
      ].map((step, idx) => (
        <div key={idx} className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
          <p className="text-gray-700">{step.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default HowTheyAreMade;
