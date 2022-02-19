const Footer = () => {
  return (
    <footer className="body-font bg-gray-900 text-gray-400">
      <div className="container mx-auto flex flex-col items-center justify-between px-5 py-8 sm:flex-row">
        <a
          href="#home"
          className="title-font flex items-center justify-center font-medium text-white md:justify-start"
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
        <p className="mt-4 text-sm text-gray-400 sm:ml-4 sm:mt-0 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:pl-4">
          © 2022 Himel —
          <a
            href="https://github.com/c0der-himel"
            className="ml-1 text-gray-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            @himel
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
