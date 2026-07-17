"use client";

import { useEffect, useState } from "react";


export default function ScrollToTop() {

  const [visible, setVisible] = useState(false);



  useEffect(() => {

    const handleScroll = () => {

      setVisible(window.scrollY > 300);

    };


    window.addEventListener(
      "scroll",
      handleScroll
    );


    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };

  }, []);






  if (!visible) {
    return null;
  }





  return (
    <button
      type="button"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-blue-700 text-xl font-bold text-white shadow-lg transition hover:bg-blue-800"
    >
      ↑
    </button>
  );
}