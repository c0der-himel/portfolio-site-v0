import profile from '../img/about/profile.png';

const AboutMe = () => {
  return (
    <section className="body-font bg-gray-900 text-gray-400" id="about">
      <div className="container mx-auto flex flex-col px-5 py-24">
        <div className="mx-auto lg:w-4/6">
          <div className="mb-20 text-center">
            <h1 className="title-font mb-4 text-center text-2xl font-bold text-white sm:text-3xl">
              About ME
            </h1>
            <div className="mt-6 flex justify-center">
              <div className="inline-flex h-1 w-16 rounded-full bg-emerald-500"></div>
            </div>
          </div>
        </div>
        <div className="mx-auto flex flex-col sm:flex-row lg:w-5/6">
          <div className="text-center sm:w-1/3 sm:py-8 sm:pr-8">
            <div className="inline-flex h-36 w-36 items-center justify-center rounded-full bg-gray-800 text-gray-600">
              <img
                className="rounded-full object-cover object-center"
                alt="hero"
                src={profile}
              />
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <h2 className="title-font mt-4 text-lg font-medium text-white">
                MD. Shahadat Hussain Himel
              </h2>
              <div className="mt-2 mb-4 h-1 w-12 rounded bg-emerald-500"></div>
              <p className="text-base text-gray-400">Full Stack Developer</p>
            </div>
          </div>
          <div className="mt-4 border-t border-gray-800 pt-4 text-center sm:mt-0 sm:w-2/3 sm:border-l sm:border-t-0 sm:py-8 sm:pl-8 sm:text-left">
            <p className="mb-4 text-lg leading-relaxed">
              I am a software engineer & full stack developer, i am from Dhaka,
              Bangladesh. I am looking for opportunity to work with a great team
              to enhance knowledge to become a great software engineer and build
              something meaningful for future generation. I love to code & build
              new things which will benefit others. I love to spend time with my
              family and friends. My favorite place to visit is Saint Martin. I
              love to help other and explain things which I am passionate about.
            </p>
            <a
              href="https://www.linkedin.com/in/shahadat-himel/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-emerald-400"
            >
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="ml-2 h-4 w-4"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
