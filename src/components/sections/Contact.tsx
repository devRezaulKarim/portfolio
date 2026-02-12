import { SendIcon } from "lucide-react";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";
import { SectionName } from "../ui/SectionName";
import { useForm } from "@formspree/react";
import { useState } from "react";

export const Contact = () => {
  const [state, handleSubmit] = useForm("mvgqnpjg");
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const validate = (form: HTMLFormElement) => {
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const nextErrors: typeof errors = {};

    if (!name) nextErrors.name = "Name is required.";
    if (!email) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
      nextErrors.email = "Enter a valid email address.";
    }
    if (!message) nextErrors.message = "Message is required.";
    if (message && message.length < 10) {
      nextErrors.message = "Message should be at least 10 characters.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!validate(form)) return;
    handleSubmit(event);
  };

  return (
    <section
      style={{
        backgroundImage: `linear-gradient(
      135deg,
      transparent 0px,
      transparent 10px,
      rgba(255, 82, 0, 0.1) 2px,
      rgba(255, 82, 0, 0.1) 12px,
      transparent 12px
    )`,
        backgroundSize: "28px 28px",
      }}
      id="contact"
      className="bg-bg-1 py-20"
    >
      <div className="container px-6 sm:px-16">
        <div className="flex flex-col items-center space-y-8 text-center sm:space-y-6">
          <SectionName name="Contact" />
          <p className="para-text-ibm text-neutral-300">
            Got an idea? I’d love to hear from you!
          </p>
        </div>
        <div className="mt-16 flex items-center justify-center">
          <form onSubmit={onSubmit} method="POST" className="w-3xl space-y-8">
            <div className="grid items-center gap-8 sm:grid-cols-2 sm:gap-20">
              <Input
                label="Your name"
                id="name"
                required
                placeholder="Enter your name"
                state={state}
                error={errors.name}
              />
              <Input
                label="Your email"
                id="email"
                required
                placeholder="Enter your email"
                state={state}
                error={errors.email}
              />
            </div>
            <div>
              <Textarea
                label="Your message"
                id="message"
                required
                placeholder="Enter your needs"
                state={state}
                error={errors.message}
              />
            </div>
            {state.succeeded && (
              <p className="animate-fade-in text-sm font-medium text-green-500 sm:text-base">
                ✅ Thanks! Your message has been sent.
              </p>
            )}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={state.submitting}
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
