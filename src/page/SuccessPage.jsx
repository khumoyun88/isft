import { FaCheckCircle } from "react-icons/fa";
import { useState, useEffect } from "react";

const SuccessPage = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowContent(true); // Show both image and tick after a delay
    }, 500); // Delay the animation for 0.5 seconds
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {/* Animated Image */}
      <div
        className={`${
          showContent ? "opacity-100 scale-100" : "opacity-0 scale-50"
        } transition-all duration-700 ease-out`}
      >
        <img className="w-23 h-auto " src="/logo.svg" alt="logo" />
      </div>
      
      {/* Text */}
      <h1 className="text-2xl font-medium text-green-600 text-center mb-4">
        Sizning ariznangiz qabul qilindi. Tez orada siz bilan bog'lanamiz!
      </h1>

      {/* Animated Check Icon */}
      <div
        className={`${
          showContent ? "opacity-100 scale-100" : "opacity-0 scale-50"
        } transition-all duration-700 ease-out`}
      >
        <FaCheckCircle className="text-green-600 text-6xl" />
      </div>
    </div>
  );
};

export default SuccessPage;
