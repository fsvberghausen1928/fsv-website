"use client";

import { useEffect } from "react";


interface ModalProps {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  title?: string;
}



export default function Modal({
  children,
  open,
  onClose,
  title,
}: ModalProps) {


  useEffect(() => {

    function handleEscape(
      event: KeyboardEvent
    ) {

      if (event.key === "Escape") {
        onClose();
      }

    }


    if (open) {

      document.addEventListener(
        "keydown",
        handleEscape
      );

    }


    return () => {

      document.removeEventListener(
        "keydown",
        handleEscape
      );

    };

  }, [open, onClose]);





  if (!open) {
    return null;
  }





  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-6"
      onClick={onClose}
    >


      <div
        className="relative w-full max-w-lg rounded-lg bg-white p-6 shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >


        <div className="mb-6 flex items-center justify-between">


          {title && (

            <h2 className="text-xl font-bold text-gray-900">
              {title}
            </h2>

          )}




          <button
            type="button"
            onClick={onClose}
            className="text-2xl text-gray-500 hover:text-gray-900"
            aria-label="Close modal"
          >
            ×
          </button>


        </div>





        {children}


      </div>


    </div>
  );
}