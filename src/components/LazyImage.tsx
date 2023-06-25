import React, { useState, useEffect, forwardRef, Ref } from "react";

// Miscellaneous
import { Blurhash } from "react-blurhash";
import { motion, Variants } from "framer-motion";
import NextImage, { StaticImageData } from "next/image";

type Props = {
  src: StaticImageData;
  className?: string;
  classNameDiv?: string;
  hash: string;
  variants?: Variants;
  alt?: string;
  animate?: any;
};

const LazyImage = forwardRef(
  (
    {
      src,
      className,
      classNameDiv,
      hash,
      variants = {},
      alt = "",
      animate = null,
    }: Props,
    ref: Ref<HTMLDivElement>
  ) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
      const img = new Image();
      img.onload = () => {
        setImageLoaded(true);
      };
      img.src = src.src;
    }, [src]);

    return (
      <React.Fragment>
        <motion.div
          style={{ display: imageLoaded ? "none" : "inline" }}
          className={`animate-pulse ${classNameDiv}`}
          variants={variants}
          animate={animate}
          ref={ref}
        >
          <Blurhash
            hash={hash}
            width="100%"
            height="100%"
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
        </motion.div>
        <NextImage
          priority
          src={src}
          style={{ display: !imageLoaded ? "none" : "inline" }}
          className={className}
          alt={alt}
        />
      </React.Fragment>
    );
  }
);

export default LazyImage;
