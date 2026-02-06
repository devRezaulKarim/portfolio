import { SendIcon } from "lucide-react";
import { Input } from "../ui/Input";
import { SectionTop } from "../ui/SectionTop";
import { Textarea } from "../ui/Textarea";

export const Contact = () => {
  return (
    <section id="contact" className="bg-bg-1 py-8 sm:py-20">
      <SectionTop />
      <div className="container mt-15 px-6 sm:px-16">
        <div className="flex flex-col items-center">
          <span className="text-primary h1-text-u underline decoration-3 underline-offset-12">
            Contact
          </span>
          <p className="para-text-ibm mt-4 text-white">
            Got an idea? I’d love to hear from you!
          </p>
        </div>
        <div className="mt-10 flex items-center justify-center">
          <form action="" className="w-3xl space-y-8">
            <div className="grid items-center gap-8 sm:grid-cols-2 sm:gap-20">
              <Input
                label="Your name"
                id="name"
                required
                placeholder="Enter your name"
              />
              <Input
                label="Your email"
                id="email"
                required
                placeholder="Enter your email"
              />
            </div>
            <div>
              <Textarea
                label="Your message"
                id="message"
                required
                placeholder="Enter your needs"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="text-bg-1 bg-primary button-text-u flex items-center gap-2 rounded-full px-16 py-4 shadow-[inset_0_2px_7px_#ffffff90] duration-300 active:scale-95"
              >
                Send Message <SendIcon className="size-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
