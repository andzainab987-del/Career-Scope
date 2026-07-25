interface SectionHeaderProps {
  badge?: string;
  title: string;
  gradientTitle?: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  badge,
  title,
  gradientTitle,
  description,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div className={`space-y-4 max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}>
      {badge && (
        <span className="text-[11px] tracking-[0.2em] uppercase text-white/40 font-medium">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
        {title}{" "}
        {gradientTitle && <span className="text-white/60">{gradientTitle}</span>}
      </h2>
      {description && (
        <p className="text-white/40 text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
