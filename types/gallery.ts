export interface GalleryImage {
  src: string;
  alt: string;
}



export interface GalleryAlbum {
  id: number;
  slug: string;
  title: string;
  cover: string;
  images: GalleryImage[];
}