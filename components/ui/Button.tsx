import Link from "next/link";


interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline" | "danger";
  className?: string;
  onClick?: () => void;
}


export default function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {


  const variants = {
    primary:
      "bg-blue-700 text-white hover:bg-blue-800",

    secondary:
      "bg-gray-900 text-white hover:bg-gray-800",

    outline:
      "border border-gray-300 text-gray-900 hover:bg-gray-100",

    danger:
      "bg-red-600 text-white hover:bg-red-700",
  };



  const styles = `
    inline-flex
    items-center
    justify-center
    rounded-lg
    px-6
    py-3
    font-semibold
    transition
    ${variants[variant]}
    ${className}
  `;



  if (href) {

    return (
      <Link
        href={href}
        className={styles}
      >
        {children}
      </Link>
    );

  }



  return (
    <button
      type={type}
      onClick={onClick}
      className={styles}
    >
      {children}
    </button>
  );
}