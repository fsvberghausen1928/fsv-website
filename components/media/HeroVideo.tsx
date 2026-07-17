interface HeroVideoProps {
  src: string;
  poster?: string;
  className?: string;
}


export default function HeroVideo({
  src,
  poster,
  className = "",
}: HeroVideoProps) {

  return (
    <video
      className={`h-full w-full object-cover ${className}`}
      autoPlay
      muted
      loop
      playsInline
      poster={poster}
    >
      <source
        src={src}
        type="video/mp4"
      />

      Your browser does not support the video tag.

    </video>
  );
}