import { ImageLoaderProps } from "next/image";

export const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};
