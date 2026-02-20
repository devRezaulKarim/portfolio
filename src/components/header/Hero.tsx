import { motion, type MotionValue } from "motion/react";

import Container from "../wrappers/Container";
import { RefObject } from "react";

export const Hero = ({
  heroRef,
  startRef,
  startX,
  startY,
  smoothX,
  smoothY,
  smoothSize,
  smoothRotate,
  smoothBorderRadius,
}: {
  heroRef: RefObject<HTMLDivElement | null>;
  startRef: RefObject<HTMLDivElement | null>;
  startX: number;
  startY: number;
  smoothX: MotionValue<number>;
  smoothY: MotionValue<number>;
  smoothSize: MotionValue<number>;
  smoothRotate: MotionValue<number>;
  smoothBorderRadius: MotionValue<string>;
}) => {
  return (
    <div className="border-y">
      <Container>
        <div ref={heroRef} className="flex flex-col border-x sm:flex-row">
          <div className="grow border-r p-4">Content</div>
          <div className="flex shrink-0 items-center justify-center p-4">
            <div ref={startRef} className="size-85 sm:size-62.5" />
            <motion.img
              src="/rezaul.avif"
              alt="Profile Pic"
              width={250}
              height={250}
              className="fixed size-85 sm:size-62.5"
              style={{
                left: startX,
                top: startY,
                x: smoothX,
                y: smoothY,
                width: smoothSize,
                height: smoothSize,
                rotate: smoothRotate,
                borderRadius: smoothBorderRadius,
              }}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
