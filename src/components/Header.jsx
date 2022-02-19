const Header = () => {
  return (
    <header className="body-font sticky top-0 z-50 bg-gray-900 text-gray-400">
      <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
        <a
          href="#home"
          className="title-font mb-4 flex items-center font-medium text-white md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-10 w-10 rounded-full bg-emerald-500 p-2 text-white"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Himel</span>
        </a>
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
          <a
            href="#home"
            className="mr-5 transition duration-300 hover:text-white"
          >
            Home
          </a>
          <a
            href="#about"
            className="mr-5 transition duration-300 hover:text-white"
          >
            About
          </a>
          <a
            href="#skills"
            className="mr-5 transition duration-300 hover:text-white"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="mr-5 transition duration-300 hover:text-white"
          >
            Projects
          </a>
        </nav>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://drive.google.com/file/d/1wDzrZ7jNyxO2av5vZuoCKN_9_lJP6aF0/view?usp=sharing"
          className="mt-4 inline-flex items-center rounded-full border-0 bg-gray-800 py-2 px-6 text-base font-bold transition duration-300 hover:bg-gray-700 focus:outline-none md:mt-0"
        >
          Resume
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="ml-1 h-4 w-4"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </header>
  );
};

export default Header;
