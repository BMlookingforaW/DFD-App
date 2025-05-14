type Props = {
  result: {
    prediction: string;
    confidence: number;
  };
};

const DetectionResult = ({ result }: Props) => {
  return (
    <div className="mt-6 bg-white shadow p-4 rounded-lg text-center">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">
        Prediction: <span className="text-blue-600">{result.prediction}</span>
      </h2>
      <p className="text-gray-600 mb-4">
        Confidence Score: <strong>{result.confidence.toFixed(2)}%</strong>
      </p>
    </div>
  );
};

export default DetectionResult;
