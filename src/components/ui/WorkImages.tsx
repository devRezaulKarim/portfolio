import { cn } from "@/lib/utils";
import { useId } from "react";

interface WorkImagesProps {
  heightClass: string;
  widthClass: string;
  images: { src: string; alt: string }[];
}

export const WorkImages = ({
  heightClass,
  widthClass,
  images,
}: WorkImagesProps) => {
  const key = useId();
  return (
    <div className="absolute top-2 z-[-1] max-w-full overflow-hidden">
      <div className="flex items-center">
        {images.map((img) => (
          <div
            key={key}
            className={cn("h-58 w-45 shrink-0 px-2", heightClass, widthClass)}
          >
            <img
              className="h-full w-full object-cover"
              src={img.src}
              alt={img.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
