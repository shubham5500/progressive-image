import { useEffect, useState } from "react";

export const ProgressiveImage = ({ src, height, width, placeholderImg }) => {
  const [imgSrc, setImgSrc] = useState(placeholderImg || src);
  const customClass =
    placeholderImg === imgSrc && placeholderImg ? "loading" : "loaded";
  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);
  return (
    <img src={imgSrc} className={customClass} height={height} width={width} />
  );
};
