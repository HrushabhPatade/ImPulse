import React from "react";

const Header = () => {
  return (
    <nav className="bg-white border-gray-200 dark:bg-[#e2e8f0] rounded-b-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black outlined-text">
            ImPulse
          </span>
        </a>
      </div>
    </nav>
  );
};

export default Header;
