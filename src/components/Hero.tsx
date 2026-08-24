import { FaGithub, FaInstagram, FaTelegram } from "react-icons/fa6";
import myImage from "../assets/images/me.webp";
import { Download, Send } from "lucide-react";

function Hero() {
  return (
    <section className="hero min-h-screen overflow-hidden relative">
      <div className="z-1">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold-400/[0.02] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-400/[0.02] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold-400/[0.04] rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-gold-400/[0.02] rounded-full"></div>
      </div>
      <div className="container relative" style={{ zIndex: 10 }}>
        <div className="right w-4/8 flex flex-col">
          <div className="title flex flex-row items-center gap-2">
            <h2 className="text-4xl">سلام</h2>
            <h1 className="text-4xl">امیرحسین شریفی</h1>
            <h2 className="text-4xl">هستم</h2>
          </div>
          <div className="type">
            <h3 className="text-xl mt-4">طراح و توسعه دهنده فول استک وب</h3>
          </div>
          <p className="mb-5 mt-4">
            بیش از ۷ سال تجربه در ساخت محصولات دیجیتال با تمرکز بر عملکرد بالا،
            تجربه کاربری عالی و معماری تمیز. آماده چالش‌های جدید.
          </p>
          <div className="buttons flex flex-row items-center justify-start gap-3">
            <button className="btn-primary py-2.5 px-6 rounded-sm text-lg flex items-center gap-2 cursor-pointer">
              <Send size={16} />
              شروع همکاری
            </button>
            <button className="btn-outline py-2.5 px-6 rounded-sm text-lg flex items-center gap-2 cursor-pointer">
              <Download size={16} />
              دانلود رزومه
            </button>
          </div>
          <div className="socials mt-8 flex flex-row items-center justify-center gap-3 w-3/5 opacity-80">
            {/* github */}
            <a href="">
              <FaGithub size={30} />
            </a>
            {/* telegram */}
            <a href="">
              <FaTelegram size={30} />
            </a>
            {/* instagram */}
            <a href="">
              <FaInstagram size={30} />
            </a>
          </div>
        </div>
        <div className="left w-4/10 flex flex-row items-center justify-center">
          <div className="image-box relative">
            <div className="absolute w-full h-full rounded-3xl gold-border float-anim -top-3 -left-3"></div>
            <img
              className="rounded-3xl overflow-hidden gold-border gold-glow float-anim"
              src={myImage}
              alt="امیرحسین شریفی"
            />
          </div>
        </div>
      </div>
      <div className="scroll absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[10px] text-neutral-600 tracking-widest uppercase">
          اسکرول
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          data-lucide="chevron-down"
          aria-hidden="true"
          className="lucide lucide-chevron-down w-4 h-4 text-gold-400/40"
        >
          <path d="m6 9 6 6 6-6"></path>
        </svg>
      </div>
    </section>
  );
}

export default Hero;
