interface HeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4;
  className?: string;
}


export default function Heading({
  children,
  level = 2,
  className = "",
}: HeadingProps) {


  const styles = {
    1: "text-5xl font-extrabold tracking-tight",
    2: "text-3xl font-bold tracking-tight",
    3: "text-2xl font-bold",
    4: "text-xl font-semibold",
  };



  const classes = `
    text-gray-900
    ${styles[level]}
    ${className}
  `;



  switch (level) {

    case 1:
      return (
        <h1 className={classes}>
          {children}
        </h1>
      );


    case 3:
      return (
        <h3 className={classes}>
          {children}
        </h3>
      );


    case 4:
      return (
        <h4 className={classes}>
          {children}
        </h4>
      );


    default:
      return (
        <h2 className={classes}>
          {children}
        </h2>
      );

  }
}