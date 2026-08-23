import {
  FaGithub,
  FaInstagram,
  FaLaravel,
  FaReact,
  FaTelegram,
} from "react-icons/fa6";
import myImage from "../assets/images/me.webp";
import { Code2, Download, Send, Trophy } from "lucide-react";
import { SiDjango } from "react-icons/si";

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
        <div className="right w-1/2 flex flex-col">
          <div className="flex flex-row items-center gap-2 mb-4">
            <span className="w-8 h-px bg-gold-400/40 inline-block"></span>
            <span className="text-gold-400/60">توسعه دهنده وب</span>
          </div>
          <h2 className="text-5xl">سلام، من</h2>
          <h1 className="text-6xl">امیرحسین شریفی</h1>
          <h3 className="text-5xl opacity-60">هستم</h3>
          <p className="my-6">
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
          <div className="socials mt-10 flex flex-row items-center justify-center gap-3 w-1/2 opacity-80">
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
        <div className="left w-1/2 flex flex-row items-center justify-center">
          <div className="image-box relative">
            <div className="absolute w-full h-full rounded-3xl gold-border float-anim -top-3 -left-3"></div>
            <img
              className="rounded-3xl overflow-hidden gold-border gold-glow float-anim"
              src={myImage}
              alt="امیرحسین شریفی"
            />
            <div
              className="absolute -top-4 -right-4 card-dark rounded-md px-4 py-3 flex items-center gap-2"
              style={{
                animation: "float 5s ease-in-out infinite 1s",
              }}
            >
              <Code2 className="lucide lucide-code-2 w-4 h-4 text-gold-400" />
              <span className="text-xs text-neutral-300">۶+ سال تجربه</span>
            </div>
            <div
              className="absolute -bottom-4 -left-4 card-dark rounded-md px-4 py-3 flex items-center gap-2"
              style={{ animation: "float 5s ease-in-out infinite 2s" }}
            >
              <Trophy className="lucide lucide-trophy w-4 h-4 text-gold-400" />
              <span className="text-xs text-neutral-300">۱۰+ پروژه</span>
            </div>

            <div className="absolute top-5 left-3 card-dark rounded-md px-4 py-4 flex items-center float-anim cursor-pointer">
              <FaLaravel className="lucide lucide-trophy w-6 h-6 text-red-400" />
            </div>
            <div className="absolute top-20 left-3 card-dark rounded-md px-4 py-4 flex items-center float-anim cursor-pointer">
              <SiDjango className="lucide lucide-trophy w-6 h-6 text-green-400" />
            </div>
            <div className="absolute top-35 left-3 card-dark rounded-md px-4 py-4 flex items-center float-anim cursor-pointer">
              <FaReact className="lucide lucide-trophy w-6 h-6 text-sky-400" />
            </div>
          </div>
        </div>
      </div>
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span class="text-[10px] text-neutral-600 tracking-widest uppercase">
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
