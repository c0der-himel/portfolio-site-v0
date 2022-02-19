import fOOdy from '../img/projects/fOOdy.png';
import crypto from '../img/projects/crypto.png';
import travel from '../img/projects/travel.png';

const Projects = () => {
  return (
    <section id="projects" className="body-font bg-gray-900 text-gray-400">
      <div className="container mx-auto px-5 py-24">
        <div className="mb-20 text-center">
          <h1 className="title-font mb-4 text-center text-2xl font-bold text-white sm:text-3xl">
            Projects
          </h1>
          <div className="mt-6 flex justify-center">
            <div className="inline-flex h-1 w-16 rounded-full bg-emerald-500"></div>
          </div>
        </div>
        <div className="-m-4 flex flex-wrap">
          <div className="p-4 md:w-1/3">
            <div className="h-full overflow-hidden rounded-2xl border-2 border-gray-800">
              <img
                className="mx-auto h-44 w-56 px-5 pt-5"
                src={fOOdy}
                alt="fOOdy"
              />
              <div className="p-6">
                <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-500">
                  Full Stack Project
                </h2>
                <h1 className="title-font mb-3 text-lg font-medium text-white">
                  fOOdy
                </h1>
                <p className="mb-3 leading-relaxed">
                  🍔 fOOdy is an online food ordering web app where user can
                  order their favorite food 😋.
                </p>
                <div className="mt-5 flex flex-wrap items-center justify-between">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://foody-v1.web.app/"
                    className="inline-flex items-center text-emerald-400 md:mb-2 lg:mb-0"
                  >
                    Live Site
                    <svg
                      className="ml-2 h-4 w-4"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/c0der-himel/foody-front-end"
                    className="inline-flex items-center text-emerald-400 md:mb-2 lg:mb-0"
                  >
                    Github
                    <svg
                      className="ml-2 h-4 w-4"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full overflow-hidden rounded-2xl border-2 border-gray-800">
              <img
                className="mx-auto h-44 w-56 px-5 pt-5"
                src={crypto}
                alt="crypto"
              />
              <div className="p-6">
                <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-500">
                  Front End Project
                </h2>
                <h1 className="title-font mb-3 text-lg font-medium text-white">
                  🚀 Cryptoverse 💰
                </h1>
                <p className="mb-3 leading-relaxed">
                  🚀 Cryptoverse is a project which is all about cryptocurrency
                  💰 info & news using Rapid API.
                </p>
                <div className="mt-5 flex flex-wrap items-center justify-between">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://cryptoverse-v0.netlify.app/"
                    className="inline-flex items-center text-emerald-400 md:mb-2 lg:mb-0"
                  >
                    Live Site
                    <svg
                      className="ml-2 h-4 w-4"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/c0der-himel/cryptoverse"
                    className="inline-flex items-center text-emerald-400 md:mb-2 lg:mb-0"
                  >
                    Github
                    <svg
                      className="ml-2 h-4 w-4"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full overflow-hidden rounded-2xl border-2 border-gray-800">
              <img
                className="mx-auto h-44 w-56 px-5 pt-5"
                src={travel}
                alt="travel"
              />
              <div className="p-6">
                <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-gray-500">
                  Full Stack Project
                </h2>
                <h1 className="title-font mb-3 text-lg font-medium text-white">
                  Travel Now
                </h1>
                <p className="mb-3 leading-relaxed">
                  This is a responsive ✈️ travel website. Where user can login,
                  book destination, manage bookings.
                </p>
                <div className="mt-5 flex flex-wrap items-center justify-between">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://travel-now-v1.web.app/"
                    className="inline-flex items-center text-emerald-400 md:mb-2 lg:mb-0"
                  >
                    Live Site
                    <svg
                      className="ml-2 h-4 w-4"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/c0der-himel/travel-now-client"
                    className="inline-flex items-center text-emerald-400 md:mb-2 lg:mb-0"
                  >
                    Github
                    <svg
                      className="ml-2 h-4 w-4"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/c0der-himel"
            className="mt-16 inline-block rounded-full border-0 bg-emerald-500 py-2 px-10 text-lg font-bold text-white hover:bg-emerald-600 focus:outline-none"
          >
            See More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
