interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}


export default function Card({
  children,
  className = "",
  hover = false,
}: CardProps) {


  return (
    <div
      className={`
        rounded-lg
        border
        bg-white
        p-6
        shadow-sm
        ${hover ? "transition hover:shadow-lg" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
}