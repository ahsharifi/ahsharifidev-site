import logo from "../assets/images/ahsharifi-logo.png";

function Header() {
  return (
    <header className="bg-dark-700/20 flex flex-row items-center justify-between px-4 py-2 rounded-md border border-dark-700/20">
      <a href="#home">
        <img src={logo} alt="امیرحسین شریفی" width={65} />
      </a>
      <ul className="flex flex-row items-center gap-6 p-0 text-gray-300">
        <li>
          <a href="#about">درباره من</a>
        </li>
        <li>
          <a href="#services">خدمات</a>
        </li>
        <li>
          <a href="#portfolio">نمونه کارها</a>
        </li>
        <li>
          <a href="#skills">مهارت ها</a>
        </li>
        <li>
          <a href="#experience">تجربیات</a>
        </li>
      </ul>
      <button className="text-gray-900 py-2 px-6 rounded-sm cursor-pointer">
        تماس با من
      </button>
    </header>
  );
}

export default Header;
