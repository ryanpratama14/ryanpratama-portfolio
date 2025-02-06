"use client";

import { cn } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import type { Geopoint, SanityAssetSourceData, SanityImageCrop, SanityImageDimensions, SanityImageHotspot, SanityImagePalette } from "@/sanity/types";
import { useNextSanityImage } from "next-sanity-image";
import Image from "next/image";

export default function ImgSanity({ alt, src, className, priority }: Props) {
  console.log(src);
  if (!src || !src?.asset?.metadata?.lqip) return null;
  const props = useNextSanityImage(client, src);

  return (
    <Image
      {...props}
      alt={alt || ""}
      sizes="(max-width: 800px) 100vw, 800px"
      placeholder="blur"
      priority={priority}
      blurDataURL={src.asset.metadata.lqip}
      className={cn("shadow", className)}
    />
  );
}

type Props = {
  alt: string | undefined | null;
  src:
    | {
        asset: {
          _id: string;
          _type: "sanity.imageAsset";
          _createdAt: string;
          _updatedAt: string;
          _rev: string;
          originalFilename?: string;
          label?: string;
          title?: string;
          description?: string;
          altText?: string;
          sha1hash?: string;
          extension?: string;
          mimeType?: string;
          size?: number;
          assetId?: string;
          uploadId?: string;
          path?: string;
          url?: string;
          metadata: {
            _type: "sanity.imageMetadata";
            location?: Geopoint;
            dimensions?: SanityImageDimensions;
            palette?: SanityImagePalette;
            lqip?: string;
            blurHash?: string;
            hasAlpha?: boolean;
            isOpaque?: boolean;
          } | null;
          source?: SanityAssetSourceData;
        } | null;
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        alt?: string;
        _type: "image";
      }
    | null
    | undefined;
  className?: string;
  priority?: boolean;
};
