import hero from '../img/hero/hero.svg';

const Hero = () => {
  return (
    <section id="home" className="body-font bg-gray-900 text-gray-400">
      <div className="container mx-auto flex flex-col items-center px-5 py-24 md:flex-row">
        <div className="mb-10 w-5/6 md:mb-0 md:w-1/2 lg:w-full lg:max-w-lg">
          <img
            className="rounded object-cover object-center"
            alt="hero"
            src={hero}
          />
        </div>
        <div className="flex flex-col items-center text-center md:w-1/2 md:items-start md:pl-16 md:text-left lg:flex-grow lg:pl-24">
          <h1 className="title-font mb-4 text-3xl font-medium text-gray-300 sm:text-4xl">
            <span className="text-xl">
              I'm <span className="font-bold text-emerald-500">Himel</span>
            </span>
            <br className="hidden lg:inline-block" />
            Frontend Developer
          </h1>
          <p className="mb-8 leading-relaxed">
            I build web applications with modern technologies like MERN stack &
            commit my code on{' '}
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/c0der-himel"
              className="font-bold text-emerald-500 underline"
            >
              Github
            </a>
          </p>
          <div className="flex justify-center">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/c0der-himel"
              className="inline-flex rounded-full border-0 bg-emerald-500 py-2 px-8 text-lg font-bold text-white transition duration-300 hover:bg-emerald-600 focus:outline-none"
            >
              Github
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://drive.google.com/file/d/1CkWwgNfDYVQ3Oc32Ik3mvOcEbsrgThnO/view?usp=sharing"
              className="ml-4 inline-flex rounded-full border-0 bg-gray-800 py-2 px-8 text-lg font-bold text-gray-400 transition duration-300 hover:bg-gray-700 hover:text-white focus:outline-none"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
