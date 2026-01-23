export const Hero = () => {
  return (
    <section className="bg-bg-1">
      <div className="container px-16 py-20">
        <div className="bg-text-u text-primary text-center">Developer</div>
        <div className="grid grid-cols-11 border">
          <div className="col-span-3"></div>
          <div className="col-span-8 space-y-8 px-4">
            <div>
              <span className="text-secondary code-text-ibm">&lt;h1&gt;</span>
              <h1 className="h1-text-u flex flex-col text-white">
                <span>Hey</span>
                <span>
                  I’m <span className="text-primary">Rezaul Karim</span>,
                </span>
                <span>Front-end developer</span>
              </h1>
              <span className="text-secondary code-text-ibm">&lt;/h1&gt;</span>
            </div>
            <div>
              <span className="text-secondary code-text-ibm">&lt;p&gt;</span>
              <p className="para-text-ibm text-white">
                I help business grow by crafting amazing web experiences. If
                you’re looking for a developer that likes to get stuff done,
              </p>
              <span className="text-secondary code-text-ibm">&lt;/p&gt;</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
