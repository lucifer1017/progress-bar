/// START pause

import React, { useEffect, useState } from "react";

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleStart = () => {
    setIsLoading(true);
  };
  const handlePause = () => {
    setIsLoading(false);
  };
  const handleReset = () => {
    setIsLoading(false);
    setProgress(0);
  };
  useEffect(() => {
    let chunks;

    if (isLoading && progress < 100) {
      chunks = setInterval(() => {
        setProgress((previousProgress) => Math.min(previousProgress + 20, 100));
      }, 1000);
    } else if (!isLoading) {
      clearInterval(chunks);
    }
    return () => clearInterval(chunks);
  }, [isLoading, progress]);

  return (
    <div className="flex justify-center items-center">
      <div className="border-2 border-gray-600 my-20 h-4 w-3/12 mx-16">
        <div
          className={`bg-red-500 
            ${progress >= 20 ? "w-1/5" : "w-0"}
            ${progress >= 40 ? "w-2/5" : "w-0"}
            ${progress >= 60 ? "w-3/5" : "w-0"}
            ${progress >= 80 ? "w-4/5" : "w-0"}
            ${progress === 100 ? "w-full" : "w-0"}
            transition-all duration-1000 ease-in-out
            h-full `}
        ></div>
      </div>
      <div className="my-20 mr-auto ">
        <button
          className="border-2 rounded-md border-gray-700 mx-2 p-1"
          onClick={handleStart}
        >
          Start
        </button>
        <button
          className="border-2 rounded-md border-gray-700 mx-2 p-1"
          onClick={handlePause}
        >
          Pause
        </button>
        <button
          className="border-2 rounded-md border-gray-700 mx-2 p-1"
          onClick={handleReset}
        >
          Reset Progress
        </button>
      </div>
    </div>
  );
};

export default Loader;
