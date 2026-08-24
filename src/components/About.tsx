import { Clock, Code2Icon, User } from "lucide-react";
import { VscOrganization } from "react-icons/vsc";

function About() {
  return (
    <section
      id="about"
      className="about min-h-screen flex flex-row items-center"
    >
      <div className="container h-full flex flex-row items-center justify-center gap-10">
        <div className="right w-1/2">
          <div className="card">
            <div className="card-header flex flex-row items-center gap-2 py-3 px-6 text-gold-400 overflow-hidden">
              <User size={20} />
              <h3 className="mt-1 text-gray-300">اطلاعات من</h3>
            </div>
            <div className="card-body px-6 py-10 mt-1 pt-2 flex flex-row justify-between flex-wrap gap-y-6">
              <div className="box flex flex-row items-center justify-between w-[46%] py-3 px-1">
                <p>نام و نام خانوادگی</p>
                <p>امیرحسین شریفی</p>
              </div>
              <div className="box flex flex-row items-center justify-between w-[46%] py-3 px-1">
                <p>سن</p>
                <p>18 سال</p>
              </div>
              <div className="box flex flex-row items-center justify-between w-[46%] py-3 px-1">
                <p>ایمیل</p>
                <p>ahsharifidev@gmail.com</p>
              </div>
              <div className="box flex flex-row items-center justify-between w-[46%] py-3 px-1">
                <p>تلفن</p>
                <p>09038834741</p>
              </div>
              <div className="box flex flex-row items-center justify-between w-[46%] py-3 px-1">
                <p>محل سکونت</p>
                <p>ایران، تبریز</p>
              </div>
              <div className="box status flex flex-row items-center justify-between w-[46%] py-3 px-1">
                <p>وضعیت</p>
                <p className="text-emerald-500">آماده همکاری</p>
              </div>
              <div className="box flex flex-row items-center justify-between w-[46%] py-3 px-1">
                <p>زبان ها</p>
                <p>فارسی، انگلیسی</p>
              </div>
              <div className="box flex flex-row items-center justify-between w-[46%] py-3 px-1">
                <p>نوع همکاری</p>
                <p>ریموت / حضوری</p>
              </div>
            </div>
          </div>
        </div>
        <div className="left w-1/2">
          <h2 className="text-4xl mb-8">درباره من</h2>
          <p className="mb-6 pr-5 border-r-3 border-r-gold-500 text-lg text-justify">
            حالا ۶ سال گذشته. با Laravel، Django، React و Node.js پروژه‌های
            واقعی می‌سازم. تو شرکت آذریزدان مدیر تییم هستم و به آدم‌ها راهنمایی
            می‌کنم.
          </p>
          <h3 className="mb-3 mr-3 text-xl text-gold-300">چرا من؟</h3>
          <p className="mb-4 pr-5 border-r-3 border-r-gold-500 text-lg text-justify">
            حالا ۶ سال گذشته. با Laravel، Django، React و Node.js پروژه‌های
            واقعی می‌سازم. تو شرکت آذریزدان مدیر تییم هستم و به آدم‌ها راهنمایی
            می‌کنم.
          </p>
          <p className="mb-8 pr-5 border-r-3 border-r-gold-500 text-lg text-justify">
            دیپلم ندارم؟ درسته. ولی ۶ سال سابقه واقعی دارم که با هیچ مدرکی عوضش
            نمی‌کنم. مدرک یه کاغذه، توانایی یه زبانه.
          </p>
          <div className="tags flex flex-row gap-3 w-full justify-center">
            <span className="bg-gold-600/15 px-4 rounded-3xl text-gold-300 h-10 border border-gold-300/30 flex flex-row items-center gap-2">
              <Clock size={16} />6 سال تجربه
            </span>
            <span className="bg-gold-600/15 px-4 rounded-3xl text-gold-300 h-10 border border-gold-300/30 flex flex-row items-center gap-2">
              <Code2Icon size={16} />
              فول استک
            </span>
            <span className="bg-gold-600/15 px-4 rounded-3xl text-gold-300 h-10 border border-gold-300/30 flex flex-row items-center gap-2">
              <VscOrganization size={16} />
              مدیر تیم
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
