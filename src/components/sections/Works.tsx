import desktopMockup from "@/assets/desktop-mockup.png";
import tabletMockup from "@/assets/tablet-mockup.png";
import mobileMockup from "@/assets/mobile-mockup.png";
import workBG from "@/assets/works-bg.png";

import { SectionTop } from "../ui/SectionTop";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MousePointer2Icon,
} from "lucide-react";
import { WorkNavBtn } from "../ui/WorkNavBtn";

export const Works = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${workBG})`,
        backgroundRepeat: "repeat",
        backgroundPosition: "left top",
      }}
      id="works"
      className="after:bg-bg-2/95 relative isolate py-20 after:absolute after:inset-0 after:-z-10"
    >
      <SectionTop />
      <div className="container mt-15 px-16">
        <div className="flex flex-col items-center">
          <span className="text-primary h1-text-u underline decoration-3 underline-offset-12">
            Works
          </span>
          <p className="para-text-ibm mt-4 text-white">
            I had the pleasure of working with these awesome projects
          </p>
        </div>
        <div className="relative mt-10 flex flex-col items-center justify-center">
          <WorkNavBtn className="left-0">
            <ChevronLeftIcon className="size-8" />
          </WorkNavBtn>
          <WorkNavBtn className="right-0">
            <ChevronRightIcon className="size-8" />
          </WorkNavBtn>
          <div className="mockup-wrapper relative w-sm">
            <div className="tablet-mock absolute bottom-0 left-0 w-44">
              <img src={tabletMockup} alt="" className="mockup" />
              <div className="absolute top-2 z-[-1] max-w-full overflow-hidden">
                <div className="flex items-center">
                  <div className="h-58 w-45 shrink-0 px-2">
                    <img
                      className="h-full w-full object-cover"
                      src="https://picsum.photos/seed/picsum/365/250"
                      alt=""
                    />
                  </div>
                  <div className="h-58 w-45 shrink-0 px-2">
                    <img
                      className="h-full w-full object-cover"
                      src="https://picsum.photos/seed/picsum/365/250"
                      alt=""
                    />
                  </div>
                  <div className="h-58 w-45 shrink-0 px-2">
                    <img
                      className="h-full w-full object-cover"
                      src="https://picsum.photos/seed/picsum/365/250"
                      alt=""
                    />
                  </div>
                  <div className="h-58 w-45 shrink-0 px-2">
                    <img
                      className="h-full w-full object-cover"
                      src="https://picsum.photos/seed/picsum/365/250"
                      alt=""
                    />
                  </div>
                  <div className="h-58 w-45 shrink-0 px-2">
                    <img
                      className="h-full w-full object-cover"
                      src="https://picsum.photos/seed/picsum/365/250"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="desktop-mock relative isolate w-full">
              <img src={desktopMockup} alt="" className="mockup" />
              <div className="absolute top-2 z-[-1] max-w-full overflow-hidden">
                <div className="flex items-center">
                  <div className="h-52 w-sm shrink-0 px-2">
                    <img
                      className="h-full w-full object-cover"
                      src="https://picsum.photos/seed/picsum/365/250"
                      alt=""
                    />
                  </div>
                  <div className="h-52 w-sm shrink-0 px-2">
                    <img
                      className="h-full w-full object-cover"
                      src="https://picsum.photos/seed/picsum/365/250"
                      alt=""
                    />
                  </div>
                  <div className="h-52 w-sm shrink-0 px-2">
                    <img
                      className="h-full w-full object-cover"
                      src="https://picsum.photos/seed/picsum/365/250"
                      alt=""
                    />
                  </div>
                  <div className="h-52 w-sm shrink-0 px-2">
                    <img
                      className="h-full w-full object-cover"
                      src="https://picsum.photos/seed/picsum/365/250"
                      alt=""
                    />
                  </div>
                  <div className="h-52 w-sm shrink-0 px-2">
                    <img
                      className="h-full w-full object-cover"
                      src="https://picsum.photos/seed/picsum/365/250"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mobile-mock absolute right-0 bottom-0 w-28">
              <img src={mobileMockup} alt="" className="mockup" />
              <div className="absolute top-1 z-[-1] max-w-full overflow-hidden">
                <div className="flex items-center">
                  <div className="h-52 w-28.5 shrink-0 px-2">
                    <img
                      className="h-full w-full object-cover"
                      src="https://picsum.photos/seed/picsum/365/250"
                      alt=""
                    />
                  </div>
                  <div className="h-52 w-28.5 shrink-0 px-2">
                    <img
                      className="h-full w-full object-cover"
                      src="https://picsum.photos/seed/picsum/365/250"
                      alt=""
                    />
                  </div>
                  <div className="h-52 w-28.5 shrink-0 px-2">
                    <img
                      className="h-full w-full object-cover"
                      src="https://picsum.photos/seed/picsum/365/250"
                      alt=""
                    />
                  </div>
                  <div className="h-52 w-28.5 shrink-0 px-2">
                    <img
                      className="h-full w-full object-cover"
                      src="https://picsum.photos/seed/picsum/365/250"
                      alt=""
                    />
                  </div>
                  <div className="h-52 w-28.5 shrink-0 px-2">
                    <img
                      className="h-full w-full object-cover"
                      src="https://picsum.photos/seed/picsum/365/250"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="group relative mt-8">
            <a
              href="#"
              className="menu-text-ibm text-primary hover:decoration-primary underline decoration-white decoration-3 underline-offset-8 duration-300"
            >
              View Site
            </a>
            <MousePointer2Icon className="text-primary pointer-events-none absolute -right-10 -bottom-6 duration-300 group-hover:-right-4 group-hover:-bottom-3" />
          </div>
        </div>
      </div>
    </section>
  );
};
//
