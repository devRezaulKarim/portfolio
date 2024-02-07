export default function Contact() {
  return (
    <div className="relative isolate">
      <h1 className="sectionTitle">Contact</h1>
      <div className="lg:flex gap-4 pt-10 min-h-[calc(100vh-10rem)] items-center">
        <div className="contactLeft lg:w-1/2 ">
          <p className="text-lg mb-8">
            Thank you for taking the time to visit my portfolio. <br /> If you
            have any inquiries, opportunities, or simply want to say hello, feel
            free to reach out to me through any of the following channels:
          </p>
          <div className="text-xl mb-2">
            <span className="mr-2 font-bold text-[var(--color-accent)]">
              Email:
            </span>
            <span>YourEmail@example.com</span>
          </div>
          <div className="text-xl mb-2">
            <span className="mr-2 font-bold text-[var(--color-accent)]">
              Phone:
            </span>
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="text-xl mb-2">
            <span className="mr-2 font-bold text-[var(--color-accent)]">
              LinkedIn:
            </span>
            <span> Your LinkedIn Profile</span>
          </div>
          <div className="text-xl">
            <span className="mr-2 font-bold text-[var(--color-accent)]">
              GitHub:
            </span>
            <span>Your GitHub Profile</span>
          </div>
          <p className="text-lg mt-8">
            I&#39;m always eager to collaborate on exciting projects, discuss
            potential opportunities, or just chat about all things web
            development. Don&#39;t hesitate to get in touch— <br />I look
            forward to hearing from you!
          </p>
        </div>
        <div className="contactRight lg:w-1/2 mt-10 lg:mt-0">
          <form action="submit.php" method="post">
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="subject">Subject:</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
