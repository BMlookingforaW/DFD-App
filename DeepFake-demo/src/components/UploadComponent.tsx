import { useRef, useState } from "react";
import axios from "axios";
import DetectionResult from "./DetectionResult";

type ResultType = {
  prediction: string;
  confidence: number;
};

const UploadComponent = () => {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<ResultType | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files?.[0];
    if (selected) {
      setFile(selected);
      setResult(null);
      setPreviewUrl(URL.createObjectURL(selected));
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const dropped = e.dataTransfer.files?.[0];
    if (dropped && dropped.type.startsWith("image/")) {
      setFile(dropped);
      setResult(null);
      setPreviewUrl(URL.createObjectURL(dropped));
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);
    try {
      const res = await axios.post<ResultType>("http://127.0.0.1:5000/api/detect", formData);
      setResult(res.data);
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Detection failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setFile(null);
    setPreviewUrl(null);
    setResult(null);
    inputRef.current?.value && (inputRef.current.value = "");
  };

  return (
    <div className="space-y-6 max-w-xl mx-auto mt-8 text-center">
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="border-2 border-dashed border-gray-300 rounded-lg p-8 cursor-pointer hover:border-blue-400 transition-colors"
        onClick={() => inputRef.current?.click()}
      >
        <p className="text-gray-600">Drag & Drop image here or click to browse</p>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          ref={inputRef}
          hidden
        />
      </div>

      {previewUrl && (
        <div className="my-4">
          <p className="text-sm text-gray-600 mb-2">Preview:</p>
          <img
            src={previewUrl}
            alt="Preview"
            className="mx-auto w-full max-w-xs rounded shadow"
          />
        </div>
      )}

      <div className="flex justify-center gap-4">
        <button
          onClick={handleUpload}
          disabled={!file || loading}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
        >
          {loading ? "Detecting..." : "Upload & Detect"}
        </button>
        {file && (
          <button
            onClick={handleClear}
            className="px-6 py-2 bg-gray-300 text-gray-800 rounded-lg"
          >
            Clear
          </button>
        )}
      </div>

      {result && <DetectionResult result={result} />}
    </div>
  );
};

export default UploadComponent;
