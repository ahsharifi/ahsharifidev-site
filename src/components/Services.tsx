import { Layout } from "lucide-react";

function Services() {
  return (
    <div className="services min-h-screen flex flex-row items-center">
      <div className="container flex flex-col items-center">
        <h2 className="mb-16 text-4xl">
          خدماتی که من <span className="text-gold-400">ارائه میدهم</span>
        </h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <li className="card-dark rounded-2xl p-8 group animate-in visible">
            <Layout />
            <h3>طراحی فرانت‌اند</h3>
            <p>
              طراحی و توسعه رابط کاربری واکنش‌گرا با React/Next.js و توجه ویژه
              به تجربه کاربری و عملکرد.
            </p>
            <ul>
              <li>React</li>
              <li>Next.js</li>
              <li>Tailwind</li>
            </ul>
          </li>
          <li className="card-dark rounded-2xl p-8 group animate-in visible">
            <Layout />
            <h3>طراحی فرانت‌اند</h3>
            <p>
              طراحی و توسعه رابط کاربری واکنش‌گرا با React/Next.js و توجه ویژه
              به تجربه کاربری و عملکرد.
            </p>
            <ul>
              <li>React</li>
              <li>Next.js</li>
              <li>Tailwind</li>
            </ul>
          </li>
          <li
            className="card-dark rounded-2xl p-8 group animate-in visible"
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="w-12 h-12 rounded-md bg-gold-400/[0.06] border border-gold-400/10 flex items-center justify-center mb-6 group-hover:bg-gold-400/10 transition-colors">
              <Layout className="text-gold-300" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-200 mb-3">
              طراحی فرانت‌اند
            </h3>
            <p className="text-neutral-500 text-sm leading-relaxed mb-5">
              طراحی و توسعه رابط کاربری واکنش‌گرا با React/Next.js و توجه ویژه
              به تجربه کاربری و عملکرد.
            </p>
            <ul className="flex flex-row gap-1">
              <li className="text-[12px] px-2.5 py-1 rounded-full bg-gold-400/6 text-gold-400/70 border border-gold-400/10 w-fit">
                React
              </li>
              <li className="text-[12px] px-2.5 py-1 rounded-full bg-gold-400/6 text-gold-400/70 border border-gold-400/10 w-fit">
                Next.js
              </li>
              <li className="text-[12px] px-2.5 py-1 rounded-full bg-gold-400/6 text-gold-400/70 border border-gold-400/10 w-fit">
                Tailwind
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Services;
