import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div className="space-y-3">
            <span className="text-sm font-bold tracking-widest uppercase">CareerScope</span>
            <p className="text-xs text-white/40 leading-relaxed max-w-xs">
              AI career intelligence for Technology, Engineering, and Aviation pathways.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-white/60 mb-4">Navigate</h4>
            <ul className="space-y-2 text-xs text-white/40">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/fields" className="hover:text-white transition-colors">Explore Fields</Link></li>
              <li><Link href="/career-compass" className="hover:text-white transition-colors">Career Compass</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-white/60 mb-4">Domains</h4>
            <ul className="space-y-2 text-xs text-white/40">
              <li><Link href="/fields?category=Technology" className="hover:text-white transition-colors">Technology</Link></li>
              <li><Link href="/fields?category=Engineering" className="hover:text-white transition-colors">Engineering</Link></li>
              <li><Link href="/fields?category=Aviation" className="hover:text-white transition-colors">Aviation</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex items-center justify-between text-[11px] text-white/30">
          <span>© {new Date().getFullYear()} CareerScope AI</span>
          <span>Next.js · TypeScript · Groq AI</span>
        </div>
      </div>
    </footer>
  );
}
