import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "TALABALAR",
    value: "20000",
    postfix: "+",
  },
  {
    metric: "YO'NALISHLAR",
    value: "15",
    postfix: "+",
  },
  {
    metric: "GRANDLAR",
    value: "300",
    postfix: "+",
  },
  {
    metric: "HAMKOR CHETEL UNIVERSITIETLARI",
    value: "7",
    postfix: "+",
  },
];

const Achievements = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 text-black py-16 px-4">
      <h1 className="text-3xl font-extrabold text-center mb-8">
        Bizning natijalar
      </h1>
      <div className="col-span-1">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="bg-white bg-opacity-10 backdrop-blur-md border border-gray-700 rounded-lg py-8 px-6 shadow-lg transition-transform transform hover:scale-105 hover:bg-opacity-20"
            >
              <h2 className="text-5xl font-bold flex items-center justify-center">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-black"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="text-black text-lg text-center mt-2">
                {achievement.metric}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Achievements;
