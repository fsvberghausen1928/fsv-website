import type { TextareaHTMLAttributes } from "react";


interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {

  label?: string;
  error?: string;
}



export default function Textarea({
  label,
  error,
  className = "",
  ...props
}: TextareaProps) {

  return (
    <div className="space-y-2">


      {label && (

        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>

      )}






      <textarea
        className={`
          min-h-32
          w-full
          resize-y
          rounded-lg
          border
          border-gray-300
          px-4
          py-3
          text-gray-900
          outline-none
          transition
          focus:border-blue-700
          focus:ring-2
          focus:ring-blue-200
          ${className}
        `}
        {...props}
      />






      {error && (

        <p className="text-sm text-red-600">
          {error}
        </p>

      )}


    </div>
  );
}