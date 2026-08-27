import { Cloud, Database, Layout, Server, ShieldCheck } from "lucide-react";
import Service from "./Service";
import { BiConversation } from "react-icons/bi";
import { SiSpeedtest } from "react-icons/si";
import { TbHttpGet } from "react-icons/tb";
import { CiMobile3 } from "react-icons/ci";

function Services() {
  return (
    <div
      className="services min-h-screen flex flex-row items-center pb-20"
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
            icon={<Server size={20} />}
            title="توسعه بک‌اند"
            description="پیاده‌سازی APIهای قدرتمند و مقیاس‌پذیر با Node.js و معماری میکروسرویس."
            tags={["Laravel", "Django", "Node.js"]}
          />
          <Service
            icon={<CiMobile3 size={20} />}
            title="اپلیکیشن موبایل"
            description="توسعه اپلیکیشن‌های کراس‌پلتفرم با React Native و عملکرد بومی."
            tags={["React Native", "Expo", "Flutter"]}
          />
          <Service
            icon={<Cloud size={20} />}
            title="DevOps و استقرار"
            description="راه‌اندازی CI/CD، Docker، مدیریت سرور و استقرار در سرویس‌های ابری."
            tags={["Docker", "Linux"]}
          />
          <Service
            icon={<Database size={20} />}
            title="طراحی دیتابیس"
            description="طراحی و بهینه‌سازی دیتابیس‌های رابطه‌ای و NoSQL با توجه به مقیاس‌پذیری."
            tags={["Mysql", "Postgresql", "Redis"]}
          />
          <Service
            icon={<BiConversation size={20} />}
            title="مشاوره فنی"
            description="مشاوره در انتخاب تکنولوژی، بررسی کد، بهبود عملکرد و معماری نرم‌افزار."
            tags={["Code Review", "Architecture"]}
          />
          <Service
            icon={<TbHttpGet size={20} />}
            title="طراحی API"
            description="طراحی و پیاده‌سازی RESTful و GraphQL API های مقیاس‌پذیر"
            tags={["REST API", "Fast API"]}
          />
          <Service
            icon={<ShieldCheck size={20} />}
            title="امنیت سایت"
            description="تحلیل و بهبود امنیت سایت‌های وب با رعایت استانداردهای بهترین عملکردها."
            tags={["Cybersecurity", "Penetration Testing"]}
          />
          <Service
            icon={<SiSpeedtest size={20} />}
            title="افزایش سرعت سایت"
            description="ارتقای امتیاز LCP و بهبود زمان پاسخ‌گویی سرور جهت تجربه کاربری بی‌نقص."
            tags={["Core Web Vitals", "LCP Optimization"]}
          />
        </ul>
      </div>
    </div>
  );
}

export default Services;
