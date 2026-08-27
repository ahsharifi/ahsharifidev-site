import { Layout } from "lucide-react";
import Service from "./Service";

function Services() {
  return (
    <div
      className="services min-h-screen flex flex-row items-center"
      id="services"
    >
      <div className="container flex flex-col items-center">
        <h2 className="mb-16 text-4xl">
          خدماتی که من <span className="text-gold-400">ارائه میدهم</span>
        </h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Service
            icon={<Layout size={20} />}
            title="طراحی فرانت‌اند"
            description="طراحی و توسعه رابط کاربری واکنش‌گرا با React/Next.js و توجه ویژه به تجربه کاربری و عملکرد."
            tags={["React", "Next.js", "Tailwind CSS"]}
          />
          <Service
            icon={<Layout size={20} />}
            title="طراحی فرانت‌اند"
            description="طراحی و توسعه رابط کاربری واکنش‌گرا با React/Next.js و توجه ویژه به تجربه کاربری و عملکرد."
            tags={["React", "Next.js", "Tailwind CSS"]}
          />
          <Service
            icon={<Layout size={20} />}
            title="طراحی فرانت‌اند"
            description="طراحی و توسعه رابط کاربری واکنش‌گرا با React/Next.js و توجه ویژه به تجربه کاربری و عملکرد."
            tags={["React", "Next.js", "Tailwind CSS"]}
          />
          <Service
            icon={<Layout size={20} />}
            title="طراحی فرانت‌اند"
            description="طراحی و توسعه رابط کاربری واکنش‌گرا با React/Next.js و توجه ویژه به تجربه کاربری و عملکرد."
            tags={["React", "Next.js", "Tailwind CSS"]}
          />
          <Service
            icon={<Layout size={20} />}
            title="طراحی فرانت‌اند"
            description="طراحی و توسعه رابط کاربری واکنش‌گرا با React/Next.js و توجه ویژه به تجربه کاربری و عملکرد."
            tags={["React", "Next.js", "Tailwind CSS"]}
          />
          <Service
            icon={<Layout size={20} />}
            title="طراحی فرانت‌اند"
            description="طراحی و توسعه رابط کاربری واکنش‌گرا با React/Next.js و توجه ویژه به تجربه کاربری و عملکرد."
            tags={["React", "Next.js", "Tailwind CSS"]}
          />
        </ul>
      </div>
    </div>
  );
}

export default Services;
