import { ExternalLink } from "lucide-react";

function Project() {
  return (
    <li className="card overflow-hidden cursor-pointer">
      <div className="cover relative aspect-video">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEJAzu5aTrvg0yPTkww7slPkkHuIjxHKsxRnF6YOnvsQ&s=10"
          alt="thumbnail"
        />
      </div>
      <div className="body p-3 pt-5 relative">
        <h3 className="text-lg">فروشگاه آنلاین لوکس</h3>
        <p className="text-sm py-3">
          پلتفرم تجارت الکترونیک با درگاه پرداخت، مدیریت موجودی و سیستم ارسال.
        </p>
        <ul className="flex flex-row gap-2 text-sm opacity-50">
          <li>React</li>
          <li>Laravel</li>
        </ul>
        <a
          href=""
          className="mt-2 block mr-auto w-fit opacity-50 hover:opacity-100"
          style={{ transition: "all 0.3s ease" }}
        >
          <ExternalLink />
        </a>
      </div>
    </li>
  );
}

export default Project;
