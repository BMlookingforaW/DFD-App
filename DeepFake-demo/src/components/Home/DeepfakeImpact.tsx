const DeepfakeImpact = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">Why Deepfakes Matter</h2>
      <p className="max-w-3xl mx-auto text-gray-700 text-lg">
        Deepfakes are AI-generated fake media that can spread misinformation, influence public opinion, and impersonate individuals.
        They are increasingly used in scams, political propaganda, and identity theft.
        Our platform helps you detect them and learn how they work.
      </p>
      <a href="/learn">
        <button className="mt-8 bg-gray-800 hover:bg-black text-white px-5 py-3 rounded-lg font-semibold">
          Learn More About Deepfakes
        </button>
      </a>
    </section>
  );
};

export default DeepfakeImpact;
