interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "white" | "gray" | "blue";
}



export default function Section({
  children,
  className = "",
  background = "white",
}: SectionProps) {


  const backgrounds = {
    white: "bg-white",
    gray: "bg-gray-50",
    blue: "bg-blue-700 text-white",
  };



  return (
    <section
      className={`
        py-16
        ${backgrounds[background]}
        ${className}
      `}
    >

      {children}

    </section>
  );
}