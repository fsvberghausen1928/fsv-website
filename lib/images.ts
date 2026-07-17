export const imageSizes = {
  thumbnail: {
    width: 300,
    height: 200,
  },

  card: {
    width: 600,
    height: 400,
  },

  hero: {
    width: 1920,
    height: 1080,
  },

  gallery: {
    width: 1200,
    height: 800,
  },
};





export function getImagePath(
  folder: string,
  filename: string
): string {

  return `/images/${folder}/${filename}`;

}





export function getTeamImage(
  filename: string
): string {

  return getImagePath(
    "teams",
    filename
  );

}





export function getPlayerImage(
  filename: string
): string {

  return getImagePath(
    "players",
    filename
  );

}





export function getStaffImage(
  filename: string
): string {

  return getImagePath(
    "staff",
    filename
  );

}





export function getSponsorLogo(
  filename: string
): string {

  return getImagePath(
    "sponsors",
    filename
  );

}





export function getNewsImage(
  filename: string
): string {

  return getImagePath(
    "news",
    filename
  );

}





export function getGalleryImage(
  filename: string
): string {

  return getImagePath(
    "gallery",
    filename
  );

}