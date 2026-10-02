import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";

type Skill = {
  id: string;
  label: string;
  note: string;
  links: string[];
};

type Layer = {
  title: string;
  skills: Skill[];
};

const layers: Layer[] = [
  {
    title: "فرانت‌اند",
    skills: [
      { id: "html", label: "HTML/CSS", note: "اسکلت و ظاهر هر صفحه وب", links: ["bootstrap", "tailwind", "js"] },
      { id: "js", label: "JavaScript", note: "منطق و تعامل در مرورگر", links: ["react", "api"] },
      { id: "bootstrap", label: "Bootstrap", note: "ساخت سریع رابط با کامپوننت‌های آماده", links: [] },
      { id: "tailwind", label: "Tailwind", note: "استایل‌دهی مستقیم با کلاس‌های ابزاری", links: ["react", "livewire"] },
      { id: "react", label: "ReactJS", note: "رابط کاربری کامپوننت‌محور", links: ["api", "supabase"] },
    ],
  },
  {
    title: "بک‌اند",
    skills: [
      { id: "php", label: "PHP", note: "زبان اصلی بک‌اند من", links: ["laravel", "wordpress", "livewire"] },
      { id: "laravel", label: "Laravel", note: "فریمورک اصلی من برای پروژه‌های جدی", links: ["livewire", "api", "pest", "security", "docker"] },
      { id: "livewire", label: "Livewire", note: "رابط پویا در لاراول، بدون نوشتن JS", links: [] },
      { id: "wordpress", label: "WordPress", note: "سایت‌های محتوایی، قالب و افزونه", links: ["mysql"] },
      { id: "python", label: "Python", note: "بک‌اند، اسکریپت و اتوماسیون", links: ["django"] },
      { id: "django", label: "Django", note: "بک‌اند پایتونی با پنل ادمین آماده", links: ["api", "mysql"] },
      { id: "api", label: "API", note: "اتصال فرانت‌اند به بک‌اند و سرویس‌های بیرونی", links: [] },
    ],
  },
  {
    title: "دیتابیس",
    skills: [
      { id: "mysql", label: "MySQL", note: "دیتابیس رابطه‌ای برای پروژه‌های لاراول و جنگو", links: ["laravel"] },
      { id: "supabase", label: "Supabase", note: "دیتابیس، احراز هویت و ذخیره‌سازی آماده", links: ["api", "js"] },
    ],
  },
  {
    title: "زیرساخت و امنیت",
    skills: [
      { id: "git", label: "Git", note: "تاریخچه کد و کار تیمی", links: ["cicd"] },
      { id: "linux", label: "Linux OS", note: "سرور، ترمینال و استقرار پروژه", links: ["docker", "security"] },
      { id: "docker", label: "Docker", note: "محیط یکسان از لپ‌تاپ تا سرور", links: ["cicd"] },
      { id: "cicd", label: "CI/CD", note: "تست و دیپلوی خودکار با هر push", links: [] },
      { id: "security", label: "Web Security", note: "جلوگیری از XSS، CSRF و SQL Injection", links: ["api"] },
    ],
  },
  {
    title: "تست",
    skills: [
      { id: "pest", label: "Pest", note: "تست‌نویسی خوانا در لاراول", links: ["unit", "cicd"] },
      { id: "unit", label: "Unit Test", note: "اطمینان از درستی کوچک‌ترین بخش‌های کد", links: ["cicd"] },
    ],
  },
];

const allSkills = layers.flatMap((l) => l.skills);
const labelOf = (id: string) => allSkills.find((s) => s.id === id)?.label ?? id;
const fa = (n: number) => n.toLocaleString("fa-IR");

// Links are written one-way above; build a symmetric map so either side can be hovered.
const adjacency: Record<string, Set<string>> = {};
allSkills.forEach((s) => (adjacency[s.id] = new Set()));
allSkills.forEach((s) =>
  s.links.forEach((t) => {
    adjacency[s.id].add(t);
    adjacency[t]?.add(s.id);
  })
);

type Line = { id: string; d: string; ex: number; ey: number };

function Skills() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [pinned, setPinned] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [lines, setLines] = useState<Line[]>([]);

  const stageRef = useRef<HTMLDivElement>(null);
  const boardRef = useRef<HTMLDivElement>(null);
  const chipRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  // hover shows connections; a click keeps them pinned (useful on touch screens)
  const active = hovered ?? pinned;
  const related = useMemo(() => (active ? adjacency[active] : null), [active]);

  /* ---------- chips fade in once when the board first enters the screen ---------- */

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* ---------- line geometry ---------- */

  const measure = useCallback(() => {
    const board = boardRef.current;
    if (!board || !active) {
      setLines([]);
      return;
    }
    const b = board.getBoundingClientRect();
    const rect = (id: string) => {
      const el = chipRefs.current[id];
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return { cx: r.left - b.left + r.width / 2, top: r.top - b.top, bottom: r.bottom - b.top };
    };

    const from = rect(active);
    if (!from) return;

    const next: Line[] = [];
    adjacency[active].forEach((id) => {
      const to = rect(id);
      if (!to) return;
      let d: string;
      let ey: number;
      if (Math.abs(to.top - from.top) < 10) {
        const mid = (from.cx + to.cx) / 2;
        d = `M ${from.cx} ${from.top} Q ${mid} ${from.top - 56} ${to.cx} ${to.top}`;
        ey = to.top;
      } else if (to.top > from.top) {
        const m = (from.bottom + to.top) / 2;
        d = `M ${from.cx} ${from.bottom} C ${from.cx} ${m}, ${to.cx} ${m}, ${to.cx} ${to.top}`;
        ey = to.top;
      } else {
        const m = (from.top + to.bottom) / 2;
        d = `M ${from.cx} ${from.top} C ${from.cx} ${m}, ${to.cx} ${m}, ${to.cx} ${to.bottom}`;
        ey = to.bottom;
      }
      next.push({ id, d, ex: to.cx, ey });
    });
    setLines(next);
  }, [active]);

  useLayoutEffect(() => {
    measure();
  }, [measure]);

  useEffect(() => {
    if (!boardRef.current) return;
    const ro = new ResizeObserver(measure);
    ro.observe(boardRef.current);
    return () => ro.disconnect();
  }, [measure]);

  /* ---------- handlers ---------- */

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = stageRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  const activeSkill = allSkills.find((s) => s.id === active);
  let chipIndex = 0;

  return (
    <div
      className="skills min-h-screen flex flex-row items-center pb-20"
      id="skills"
    >
      <div className="container flex flex-col items-center">
        <h2 className="sk-title mb-4 text-4xl">مهارت های من</h2>
        <p className="mb-14 max-w-xl text-center opacity-70">
          مهارت‌ها جدا از هم کار نمی‌کنن. موس رو روی هر کدوم ببر تا ببینی توی
          پروژه‌ها به چه چیزهایی وصل می‌شه.
        </p>

        <div
          ref={stageRef}
          className={`sk-stage ${revealed ? "in" : ""}`}
          onPointerMove={handleMove}
          onClick={(e) => {
            // tapping empty space inside the board releases the pinned skill
            const target = e.target as HTMLElement;
            if (!target.closest(".sk-chip, .sk-panel")) setPinned(null);
          }}
        >
          {/* first child = right side in RTL: the skills list */}
          <div ref={boardRef} className="sk-board">
            <svg className="sk-svg" aria-hidden="true">
              {lines.map((l) => (
                <g key={`${active}-${l.id}`}>
                  <path d={l.d} pathLength={1} className="sk-line" />
                  <path d={l.d} className="sk-flow" />
                  <circle cx={l.ex} cy={l.ey} r={4} className="sk-dot" />
                </g>
              ))}
            </svg>

            {layers.map((layer) => (
              <div key={layer.title} className="sk-layer">
                <div className="sk-layer-head">
                  <span>{layer.title}</span>
                  <small>{fa(layer.skills.length)} مهارت</small>
                </div>

                <div className="sk-chips">
                  {layer.skills.map((s) => {
                    const isActive = active === s.id;
                    const isRelated = related?.has(s.id) ?? false;
                    const dimmed = active !== null && !isActive && !isRelated;
                    const idx = chipIndex++;

                    return (
                      <button
                        key={s.id}
                        ref={(el) => {
                          chipRefs.current[s.id] = el;
                        }}
                        type="button"
                        style={{ ["--i" as string]: idx }}
                        aria-pressed={pinned === s.id}
                        onPointerEnter={(e) => {
                          if (e.pointerType === "mouse") setHovered(s.id);
                        }}
                        onPointerLeave={(e) => {
                          if (e.pointerType === "mouse") setHovered(null);
                        }}
                        onFocus={(e) => {
                          // only keyboard focus acts like hover; a tap also focuses the button
                          // and would otherwise fight with the pin toggle
                          if (e.currentTarget.matches(":focus-visible")) setHovered(s.id);
                        }}
                        onBlur={() => setHovered((h) => (h === s.id ? null : h))}
                        onClick={() => setPinned((p) => (p === s.id ? null : s.id))}
                        className={[
                          "sk-chip",
                          isActive ? "is-active" : "",
                          isRelated ? "is-related" : "",
                          dimmed ? "is-dim" : "",
                        ].join(" ")}
                      >
                        <span dir="ltr">{s.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* second child = left side in RTL: the details panel */}
          <aside className="sk-panel" aria-live="polite">
            {activeSkill ? (
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="sk-panel-name" dir="ltr">
                    {activeSkill.label}
                  </span>
                  <span className="sk-panel-count">
                    {fa(adjacency[activeSkill.id].size)} اتصال
                  </span>
                </div>
                <p className="opacity-80 leading-8">{activeSkill.note}</p>

                {adjacency[activeSkill.id].size > 0 && (
                  <div className="flex flex-col gap-2 text-sm">
                    <span className="opacity-60">در پروژه‌ها همراهشه با:</span>
                    <div className="flex flex-wrap gap-2">
                      {[...adjacency[activeSkill.id]].map((id) => (
                        <button
                          key={id}
                          type="button"
                          className="sk-mini"
                          onClick={() => {
                            setHovered(null);
                            setPinned(id);
                          }}
                        >
                          <span dir="ltr">{labelOf(id)}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <p className="opacity-50 leading-8">
                موس رو روی یک مهارت ببر تا اتصال‌هاش رو ببینی.
              </p>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}

export default Skills;
