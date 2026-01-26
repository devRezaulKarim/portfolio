import aboutBG from "@/assets/about-bg.svg";
import about from "@/assets/Rezaul.png";
import { SectionTop } from "../ui/SectionTop";

export const About = () => {
  return (
    <section
      style={{
        backgroundImage: `
        url(${aboutBG}),
          linear-gradient(to bottom, #231c1a, #231c1a)
        `,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      id="about"
      className="py-20"
    >
      <SectionTop />
      <div className="container mt-15 grid grid-cols-11 items-center px-16">
        <div className="col-span-7 flex flex-col items-start gap-10">
          <div className="h1-text-u bg-bg-1 border-primary rounded-tl-4xl rounded-br-4xl border-2 px-10 py-4 text-white">
            About me
          </div>
          <div className="bg-bg-1 rounded-4xl px-10 py-6">
            <span className="logo-text-ibm text-primary">Hello!</span>
            <p className="para-text-ibm mt-1 text-white">
              My name is Rezaul Karim and I specialize in web developement that
              utilizes HTML, CSS, JS, and REACT etc. I am a highly motivated
              individual and eternal optimist dedicated to writing clear,
              concise, robust code that works. Striving to never stop learning
              and improving. When I'm not coding, I am writing bolgs, reading,
              or picking up some new hands-on art project like photography. I
              like to have my perspective and belief systems challenged so that
              I see the world through new eyes.
            </p>
          </div>
        </div>
        <div className="col-span-4">
          <img
            className="ml-auto aspect-[1/1.1] max-w-4/5 rounded-2xl object-cover"
            src={about}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
