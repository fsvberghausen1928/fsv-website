import type { SelectHTMLAttributes } from "react";


interface SelectOption {
  label: string;
  value: string;
}


interface SelectProps
  extends SelectHTMLAttributes<HTMLSelectElement> {

  label?: string;
  options: SelectOption[];
  error?: string;
}



export default function Select({
  label,
  options,
  error,
  className = "",
  ...props
}: SelectProps) {


  return (
    <div className="space-y-2">


      {label && (

        <label className="block text-sm font-medium text-gray-700">
          {label}
        </label>

      )}






      <select
        className={`
          w-full
          rounded-lg
          border
          border-gray-300
          bg-white
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
      >


        {options.map((option) => (

          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>

        ))}


      </select>






      {error && (

        <p className="text-sm text-red-600">
          {error}
        </p>

      )}


    </div>
  );
}