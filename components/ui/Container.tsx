interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}


export default function Container({
  children,
  className = "",
}: ContainerProps) {

  return (
    <div
      className={`
        mx-auto
        w-[92%]
        max-w-[1440px]
        ${className}
      `}
    >
      {children}
    </div>
  );
}