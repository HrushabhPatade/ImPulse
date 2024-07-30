import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer bg-white rounded-t-lg shadow dark:bg-[#e2e8f0]">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-black">
            © 2024{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              ImPulse
            </a>
            . Engineered by Hrushabh.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-black sm:mt-0">
          <li>
              <a href="https://drive.google.com/file/d/1V42nZPILdKLNa_Bep1ePsc4ELuKsJ-Z0/view?usp=sharing" target="_blank" className="hover:underline me-4 md:me-6">
                Resume
              </a>
            </li>
            <li>
              <a href="https://github.com/HrushabhPatade" target="_blank" className="hover:underline me-4 md:me-6">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/hrushabh-patade/" target="_blank" className="hover:underline me-4 md:me-6">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:phrushabh13@gmail.com" target="_blank" className="hover:underline me-4 md:me-6">
                Email
              </a>
            </li>
            <li>
              <a href="tel:+918369051061" target="_blank" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
