import React from "react";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import useDarkMode from "./useDarkMode";

function Navbar({toggleDark}) {
  const [isOpen, setIsOpen] = useState(false);
  const [colorTheme, setTheme] = useDarkMode();
  
  return (
    <div>
      <nav className="dark:bg-gray-800 bg-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="#about" className="mr-5 hover:text-green-500 title-font font-medium text-white mb-4 text-3xl">
                Kashyap Patel
              </a>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="#projects"
                    className="text-gray-300 hover:bg-gray-700 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Personal Projects
                  </a>

                  <a
                    href="#skills"
                    className="text-gray-300 hover:bg-gray-700 hover:text-green-500  px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Skills
                  </a>

                  <a
                    href="#contact"
                    className="text-gray-300 hover:bg-gray-700 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contact Me
                  </a>
                  <a
                    href="https://github.com/Kashyap5551" target="_blank"
                    className="text-gray-300 hover:bg-gray-700 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/kashyap-patel-65045315b/" target="_blank"
                    className="text-gray-300 hover:bg-gray-700 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="../myResume.pdf" target="_blank"
                    className="text-gray-300 hover:bg-gray-700 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium"
                  >
                    My Résumé
                  </a>
                  <span onClick={() => setTheme(colorTheme)} className=" transition duration-500 w-10 h-10 bg-white block rounded-full shadow-lg cursor-pointer text-black flex items-center justify-center">
                    {colorTheme === "light" ?
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
                      </svg>
                      :
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                      </svg>
                    }
                  </span>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#projects"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Personal Projects
                </a>

                <a
                  href="#skills"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Skills
                </a>

                <a
                  href="#contact"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact Me
                </a>
                <a
                  href="https://github.com/Kashyap5551"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/kashyap-patel-65045315b/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  LinkedIn
                </a>
                <a
                  href="../myResume.pdf"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  My Résumé
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar

