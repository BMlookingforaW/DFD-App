import { SignInButton, SignUpButton } from "@clerk/clerk-react";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-black text-white flex flex-col justify-center items-center p-6 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Welcome to DeepFake Detector
      </h1>
      <p className="text-lg max-w-xl mb-8 text-gray-300">
        Instantly analyze images and uncover deepfake content using AI.
        Secure. Fast. Educational.
      </p>

      <div className="flex gap-4">
        <SignInButton mode="modal">
          <button className="px-6 py-2 rounded bg-blue-600 hover:bg-blue-700 font-semibold">
            Sign In
          </button>
        </SignInButton>
        <SignUpButton mode="modal">
          <button className="px-6 py-2 rounded border border-white font-semibold">
            Sign Up
          </button>
        </SignUpButton>
      </div>
    </div>
  );
};

export default Landing;
