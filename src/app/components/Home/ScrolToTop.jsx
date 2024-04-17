import React, { useState, useEffect } from "react";
import { GoMoveToTop } from "react-icons/go";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div
        className="fixed bottom-4 right-0 p-4 "
        fill="none"
        stroke="currentColor"
      >
        {showTopBtn && (
          <button
            aria-label="Scroll To Top"
            type="button"
            class="rounded-full  bg-blue-500 p-2 text-white transition-all hover:bg-blue-300 dark:bg-blue-700 dark:text-gray-400 dark:hover:bg-gray-600"
            onClick={goToTop}
          >
            <svg class="h-5 w-5" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        )}
      </div>
      <div
        className="fixed bottom-24 right-0 p-4 "
        fill="none"
        stroke="currentColor"
      >
        {/* {showTopBtn && (
          <button
            aria-label="Scroll To Top"
            type="button"
            class="rounded-full md:hidden bg-blue-500 p-2 text-white transition-all hover:bg-blue-300 dark:bg-blue-700 dark:text-gray-400 dark:hover:bg-gray-600"
            onClick={goToTop}
          >
            <svg class="h-5 w-5" fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        )} */}
      </div>
      {/* tess 124421*/}
    </>
  );
};
export default ScrollToTop;
