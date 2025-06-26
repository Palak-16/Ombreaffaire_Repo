import Image from "next/image";

interface MediaRendererProps {
  src: string;
  alt?: string;
  className?: string;
  width?: number;
  height?: number;
  autoPlay?: boolean;
  controls?: boolean;
  muted?: boolean;
  loop?: boolean;
  rounded?: boolean;
}

const MediaRenderer: React.FC<MediaRendererProps> = ({
  src,
  alt = "",
  className = "",
  width = 500,
  height = 500,
  autoPlay = true,
  controls = false,
  muted = true,
  loop = true,
  rounded = false,
}) => {
  const isVideo = /\.(mp4|webm|mov)$/i.test(src);

  const commonClass = `${className} ${rounded ? "rounded" : ""}`;

  return isVideo ? (
    <video
      src={src}
      className={commonClass}
      autoPlay={autoPlay}
      muted={muted}
      loop={loop}
      playsInline
      controls={controls}
    />
  ) : (
    <Image
      src={src || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      className={commonClass}
    />
  );
};

export default MediaRenderer;
