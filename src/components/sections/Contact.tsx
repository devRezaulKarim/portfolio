import { SendIcon } from "lucide-react";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";
import { SectionName } from "../ui/SectionName";

export const Contact = () => {
  return (
    <section id="contact" className="bg-bg-1 py-20">
      <div className="container px-6 sm:px-16">
        <div className="flex flex-col items-center space-y-8 text-center sm:space-y-6">
          <SectionName name="Contact" />
          <p className="para-text-ibm text-neutral-300">
            Got an idea? I’d love to hear from you!
          </p>
        </div>
        <div className="mt-16 flex items-center justify-center">
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
                className="bg-primary button-text-u group flex items-center gap-2 rounded-full px-16 py-4 text-neutral-300 shadow-[inset_0_2px_7px_#ffffff90] duration-300 active:scale-95"
              >
                Send Message{" "}
                <SendIcon className="size-6 rotate-45 duration-300 group-hover:rotate-0" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
