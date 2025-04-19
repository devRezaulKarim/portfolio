import { BiLinkExternal } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="relative isolate">
      <h1 className="sectionTitle">Contact</h1>
      <div className="lg:flex gap-4 lg:pt-20  items-center">
        <motion.div
          initial={{
            y: -500,
            opacity: [0],
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          className="contactLeft lg:w-1/2 "
        >
          <p className="text-lg mb-6">
            Thank you for taking the time to visit my portfolio. <br /> If you
            have any inquiries, opportunities, or simply want to say hello, feel
            free to reach out to me through any of the following channels:
          </p>
          <div className="text-xl mb-2">
            <span className="mr-2 font-bold text-[var(--color-accent)]">
              Email:
            </span>
            <span>dev.rezaulkarim@gmail.com</span>
          </div>
          <div className="text-xl mb-2">
            <span className="mr-2 font-bold text-[var(--color-accent)]">
              Phone:
            </span>
            <span>+880 1540652375</span>
          </div>
          <div className="text-xl mb-2 flex">
            <span className="mr-2 font-bold text-[var(--color-accent)]">
              LinkedIn:
            </span>
            <a
              className="flex items-center gap-1 relative after:duration-200 after:content-[''] after:w-0 after:h-[2px] after:bg-[var(--color-accent)] after:absolute after:-bottom-[2px]  hover:after:w-full"
              href="https://www.linkedin.com/in/dev-rezaul-karim/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile{" "}
              <BiLinkExternal className="text-[var(--color-accent)]" />
            </a>
          </div>
          <div className="text-xl mb-2 flex">
            <span className="mr-2 font-bold text-[var(--color-accent)]">
              GitHub:
            </span>
            <a
              className="flex items-center gap-1 relative after:duration-200 after:content-[''] after:w-0 after:h-[2px] after:bg-[var(--color-accent)] after:absolute after:-bottom-[2px] after:right-0 hover:after:w-full"
              href="https://github.com/devRezaulKarim"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Profile{" "}
              <BiLinkExternal className="text-[var(--color-accent)]" />
            </a>
          </div>

          <div className="text-xl flex">
            <span className="mr-2 font-bold text-[var(--color-accent)]">
              Skype:
            </span>
            <a
              className="flex items-center gap-1 relative after:duration-200 after:content-[''] after:w-0 after:h-[2px] after:bg-[var(--color-accent)] after:absolute after:-bottom-[2px] after:right-0 hover:after:w-full"
              href="https://join.skype.com/invite/raOqXQNYEz6m"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on Skype{" "}
              <BiLinkExternal className="text-[var(--color-accent)]" />
            </a>
          </div>
          <p className="text-lg mt-6">
            I&#39;m always eager to collaborate on exciting projects, discuss
            potential opportunities, or just chat about all things web
            development. Don&#39;t hesitate to get in touch— <br />I look
            forward to hearing from you!
          </p>
          <h3 className="mt-4 text-3xl text-[var(--color-accent)] font-extrabold">
            Md. Rezaul Karim
          </h3>
        </motion.div>

        <motion.div
          initial={{
            y: 500,
            opacity: [0],
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          className="contactRight lg:w-1/2 mt-10 lg:mt-0"
        >
          <form
            className=" border-2 border-[var(--color-accent)] py-3 rounded-md lg:w-3/4 mx-auto flex flex-col items-center"
            action="submit.php"
            method="post"
          >
            <span className="text-xl mb-4">I will love to hear from you!</span>
            <div className="mb-3 w-3/4">
              <label className="block mb-1" htmlFor="name">
                Name:
              </label>
              <input
                className="w-full px-2 py-1 rounded"
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                required
              />
            </div>
            <div className="mb-3 w-3/4">
              <label className="block mb-1" htmlFor="email">
                Email:
              </label>
              <input
                className="w-full px-2 py-1 rounded"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-3 w-3/4">
              <label className="block mb-1" htmlFor="subject">
                Subject:
              </label>
              <input
                className="w-full px-2 py-1 rounded"
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                required
              />
            </div>
            <div className="mb-3 w-3/4">
              <label className="block mb-1" htmlFor="message">
                Message:
              </label>
              <textarea
                className="w-full px-2 py-1 rounded"
                id="message"
                name="message"
                rows="4"
                placeholder="Your Advice"
                required
              ></textarea>
            </div>
            <div>
              <button
                className="bg-[var(--color-accent)] rounded-md py-1 px-8 text-lg font-semibold text-[var(--color-primary)] flex items-center gap-1"
                type="submit"
              >
                Send <IoIosSend />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
