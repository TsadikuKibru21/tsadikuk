import Link from "next/link";

const Contact = () => {
  return (
    <section
      id="contact"
      className="max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center"
    >
    
      <h2 className="font-titleFont text-5xl font-semibold">Contact Me</h2>
      <p className="max-w-[600px] text-center text-textDark">
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>
      <p className="font-titleFont text-2xl font-semibold text-textDark">
        Name : Tsadiku Kibru
      </p>
      <p className="font-titleFont text-2xl font-semibold text-textDark">
        Phone : +251973506505
      </p>
      <a href="mailto:tsadikuk@gmail.com">
        <button className="w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300">
          Say Hello
        </button>
      </a>
    </section>
  );
};

export default Contact;
