export interface GalleryImage {
  src: string;
  alt: string;
}



export interface GalleryAlbum {
  id: number;
  slug: string;
  title: string;
  description: string;
  cover: string;
  images: GalleryImage[];
}