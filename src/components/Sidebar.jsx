import { useTypewriter } from '../hooks/useTypewriter'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { useReveal } from '../hooks/useReveal'

const NAV_ITEMS = [
  { id: 'about', num: '01', icon: 'fa-user', label: 'About', desc: 'Who I am & what I do' },
  { id: 'experience', num: '02', icon: 'fa-briefcase', label: 'Experience', desc: 'DevSecOps and CTF background' },
  { id: 'education', num: '03', icon: 'fa-graduation-cap', label: 'Education', desc: 'MCA and BCA academic record' },
  { id: 'projects', num: '04', icon: 'fa-terminal', label: 'Projects', desc: 'Recon and security tooling' },
  { id: 'skills', num: '05', icon: 'fa-code', label: 'Skills', desc: 'Languages, tools & platforms' },
]

export default function Sidebar() {
  const { displayed, showCursor } = useTypewriter('Vishakhan Pillai V P')
  const activeId = useScrollSpy(NAV_ITEMS.map((i) => i.id))
  const heroRef = useReveal()
  const statsRef = useReveal()
  const navRef = useReveal()
  const socialRef = useReveal()

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[42%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <div ref={heroRef} className="reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-600/10 border border-red-600/20 text-red-400 text-xs font-mono mb-6 shimmer">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            Available for security opportunities
          </div>

          <h1 className="whitespace-nowrap text-4xl font-extrabold tracking-tight text-slate-100 sm:text-4xl lg:text-4xl leading-[1.05]">
            {displayed}
            {showCursor && <span className="typing-cursor" />}
          </h1>

          <div className="mt-4 flex items-center gap-3 text-lg font-mono text-slate-300">
            <span className="text-red-400 font-bold">$</span>
            <span className="text-slate-400">DevSecOps | Offensive Security</span>
          </div>

          <p className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-slate-400">
            Cybersecurity professional focused on application security assessment,
            vulnerability analysis, and DevSecOps, with a strong interest in offensive security
            and adversarial research.
          </p>
        </div>

        <div ref={statsRef} className="mt-8 grid grid-cols-3 gap-4 max-w-md reveal">
          <div className="text-center">
            <div className="text-xl font-bold text-slate-100 font-mono">1</div>
            <div className="text-xs text-slate-500 mt-1 font-medium uppercase tracking-wider">Internship</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-slate-100 font-mono">2</div>
            <div className="text-xs text-slate-500 mt-1 font-medium uppercase tracking-wider">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-slate-100 font-mono">4</div>
            <div className="text-xs text-slate-500 mt-1 font-medium uppercase tracking-wider">Focus Areas</div>
          </div>
        </div>

        <nav ref={navRef} className="hidden lg:block mt-12 reveal" aria-label="In-page jump links">
          <div className="relative">
            <div className="absolute left-[17px] top-3 bottom-3 w-px bg-gradient-to-b from-red-500/30 via-red-500/10 to-transparent" />

            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`group flex items-start gap-4 py-2.5 nav-link transition-all relative ${
                      activeId === item.id ? 'active' : ''
                    }`}
                  >
                    <div className="relative z-10 flex items-center justify-center w-9 h-9 rounded-xl bg-slate-800/60 border border-slate-700/60 text-slate-500 group-hover:border-red-500/40 group-hover:bg-red-500/10 group-hover:text-red-400 transition-all duration-300 nav-icon shrink-0">
                      <span className="text-[12px] font-bold font-mono nav-num">{item.num}</span>
                      <i className={`fas ${item.icon} text-[11px] hidden nav-icon-alt`} />
                    </div>
                    <div className="flex-1 min-w-0 pt-1 pr-2">
                      <div className="flex items-center gap-2">
                        <span className="nav-text text-sm font-semibold text-slate-400 group-hover:text-slate-200 transition-colors duration-300">
                          {item.label}
                        </span>
                        <span className="text-[10px] text-slate-600 font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {item.num}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 mt-0.5 truncate max-w-0 group-hover:max-w-[240px] transition-all duration-500">
                        {item.desc}
                      </p>
                    </div>
                    <div className="shrink-0 self-center w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-red-400 transition-colors duration-300 nav-dot" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>

      <div ref={socialRef} className="mt-12 lg:mt-0 reveal">
        <ul className="flex items-center gap-5" aria-label="Social media">
          <li>
            <a
              className="block text-slate-500 hover:text-slate-200 transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
              href="https://github.com/vishakhanpillai"
              target="_blank"
              title="GitHub"
            >
              <i className="fab fa-github fa-lg" />
            </a>
          </li>
          <li>
            <a
              className="block text-slate-500 hover:text-slate-200 transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
              href="https://linkedin.com/in/vishakhanpillai"
              target="_blank"
              title="LinkedIn"
            >
              <i className="fab fa-linkedin-in fa-lg" />
            </a>
          </li>
          <li>
            <a
              className="block text-slate-500 hover:text-slate-200 transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
              href="https://x.com/vishakhanpillai"
              target="_blank"
              title="X.com"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-5 w-5 fill-current"
              >
                <path d="M18.9 2H22l-6.78 7.75L23.2 22H17.6l-5.56-7.24L5.7 22H2.6l7.3-8.35L.8 2h5.76l5.06 6.58L18.9 2Zm-1 18h1.7L6.7 3.9H4.88L17.9 20Z" />
              </svg>
            </a>
          </li>
          <li>
            <a
              className="block text-slate-500 hover:text-slate-200 transition-all duration-300 hover:scale-110 hover:-translate-y-0.5"
              href="https://tryhackme.com/p/vishakhanpillai"
              target="_blank"
              title="TryHackMe"
            >
              <i className="fas fa-shield-halved fa-lg" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
