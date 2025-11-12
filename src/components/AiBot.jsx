import Lottie from "lottie-react";
import aiBotAnimation from "../assets/RobotSaludando.json";
import TextType from "./TextType";

export const AiBot = () => {
  return (
    <div className="relative w-64 h-80 flex items-center justify-center">
      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm rounded-xl px-4 py-2 text-center">
        <TextType
          text={[
            "Always curious. Always building",
            "Code with purpose, learn with passion",
            "Building today, learning for tomorrow",
          ]}
          typingSpeed={100}
          pauseDuration={1500}
          deletingSpeed={50}
          className="text-white italic"
          showCursor={true}
          cursorCharacter="_"
        />
        <div className="absolute  left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-800 rotate-45"></div>
      </div>

      <Lottie
        animationData={aiBotAnimation}
        loop={true}
        autoplay={true}
        style={{ width: "100%", height: "100%" }}
        className="drop-shadow-lg"
      />
    </div>
  );
};
