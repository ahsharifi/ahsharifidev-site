interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
}

function Service({ icon, title, description, tags }: ServiceProps) {
  return (
    <li className="card-dark rounded-2xl p-8 group animate-in visible">
      <div className="w-12 h-12 rounded-md bg-gold-400/6 border border-gold-400/10 flex items-center justify-center mb-6 group-hover:bg-gold-400/10 transition-colors text-gold-300">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-neutral-200 mb-3">{title}</h3>
      <p className="text-neutral-500 text-sm leading-relaxed mb-5">
        {description}
      </p>
      <ul className="flex flex-row gap-1">
        {tags.map((tag, index) => (
          <li
            key={index}
            className="text-[12px] px-2.5 py-1 rounded-full bg-gold-400/6 text-gold-400/70 border border-gold-400/10 w-fit"
          >
            {tag}
          </li>
        ))}
      </ul>
    </li>
  );
}

export default Service;
