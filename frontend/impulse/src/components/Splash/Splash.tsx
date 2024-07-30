import React, { useState, useEffect } from "react";

const SplashScreen = () => {
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    const lineTimers = [0, 1000, 2000, 3000, 4000, 5000, 6000, 7000];

    lineTimers.forEach((time, index) => {
      setTimeout(() => {
        setVisibleLines(index + 1);
      }, time);
    });

    return () => {
      // Clean up timers if the component unmounts
      lineTimers.forEach((_, index) => clearTimeout(index));
    };
  }, []);

  return (
    <div
      id="maincontent"
      className="flex items-center justify-start p-0 text-white"
    >
      <div className="text-start">
        {visibleLines >= 1 && <h2 className="mt-4 text-lg">Welcome to,</h2>}
        {visibleLines >= 2 && <h1 className="text-4xl font-bold">ImPulse!</h1>}
        {visibleLines >= 3 && (
          <h2 className="mt-4 text-xl">
            Task Management Application, developed in MERN Stack.
          </h2>
        )}
        {visibleLines >= 4 && (
          <h2 className="mt-4 text-lg">With strict typing of TypeScript.</h2>
        )}
        {visibleLines >= 5 && (
          <h2 className="mt-4 text-lg">Frontend in React with TypeScript.</h2>
        )}
        {visibleLines >= 6 && (
          <h2 className="mt-4 text-lg">
            Backend in NodeJS & ExpressJS with TypeScript.
          </h2>
        )}
        {visibleLines >= 7 && (
          <h2 className="mt-4 text-lg">Datamodel with Mongo Atlas Database.</h2>
        )}
        <br />
        <br />
        {visibleLines >= 8 && (
          <h2 className="mt-4 text-lg">So let's begin..</h2>
        )}
      </div>
    </div>
  );
};

export default SplashScreen;
