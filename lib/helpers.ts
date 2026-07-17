export function cn(
  ...classes: (
    string | undefined | false | null
  )[]
): string {

  return classes
    .filter(Boolean)
    .join(" ");

}





export function formatName(
  firstName: string,
  lastName: string
): string {

  return `${firstName} ${lastName}`.trim();

}





export function getInitials(
  name: string
): string {

  return name
    .split(" ")
    .map(
      (part) =>
        part.charAt(0)
    )
    .join("")
    .toUpperCase();

}





export function truncateText(
  text: string,
  length: number
): string {


  if (text.length <= length) {

    return text;

  }



  return `${text.slice(
    0,
    length
  )}...`;

}





export function slugToTitle(
  slug: string
): string {


  return slug
    .split("-")
    .map(
      (word) =>
        word.charAt(0).toUpperCase() +
        word.slice(1)
    )
    .join(" ");

}





export function isEmpty(
  value: unknown
): boolean {

  return (
    value === null ||
    value === undefined ||
    value === ""
  );

}