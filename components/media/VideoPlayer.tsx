interface VideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
}


export default function VideoPlayer({
  src,
  poster,
  title = "Video",
}: VideoPlayerProps) {

  return (
    <div className="overflow-hidden rounded-lg bg-black">


      <video
        className="w-full"
        controls
        playsInline
        poster={poster}
      >

        <source
          src={src}
          type="video/mp4"
        />


        Your browser does not support the video tag.


      </video>



      <p className="sr-only">
        {title}
      </p>


    </div>
  );
}