import React from "react";

interface HeaderProps {
  startTour: () => void; // Define the type of startTour
}

const Header: React.FC<HeaderProps> = ({ startTour }) => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-[#e2e8f0] rounded-b-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div>
          <a
            href="http://localhost:3000/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black outlined-text">
              ImPulse
            </span>
          </a>
        </div>
        <div id="useGuide" className="flex">
          <h1 className="waving" data-hover="👋"></h1>
          <h1
            onClick={startTour}
            className="text-black text-lg hover:underline hover:cursor-pointer"
          >
            How to use?
          </h1>
        </div>
      </div>
    </nav>
  );
};

export default Header;
