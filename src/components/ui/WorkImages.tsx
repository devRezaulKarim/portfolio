import { cn } from "@/lib/utils";
import { useId } from "react";

interface WorkImagesProps {
  heightClass: string;
  widthClass: string;
  images: { src: string; alt: string }[];
  activeIndex: number;
}

export const WorkImages = ({
  heightClass,
  widthClass,
  images,
  activeIndex,
}: WorkImagesProps) => {
  const key = useId();
  return (
    <div
      className={cn(
        "absolute top-1.5 z-[-1] overflow-hidden rounded-xl",
        widthClass,
      )}
    >
      <div
        style={{ transform: `translateX(${-100 * activeIndex}%)` }}
        className="flex items-center duration-300"
      >
        {images.map((img) => (
          <div key={key} className={cn("w-full shrink-0", heightClass)}>
            <img
              className="h-full w-full rounded-xl object-cover"
              src={img.src}
              alt={img.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
