import { useState } from 'react'

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  function toggle() {
    setOpen((o) => !o)
    document.body.classList.toggle('overflow-hidden')
  }

  function close() {
    setOpen(false)
    document.body.classList.remove('overflow-hidden')
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-slate-200 font-bold text-lg font-mono tracking-tight">
            <span className="text-red-500">&lt;</span>
            <span className="hover:text-red-400 transition-colors">vp</span>
            <span className="text-red-500">/&gt;&nbsp;</span>
          </a>

          <div className="hidden lg:flex items-center gap-3">
            <span className="text-sm text-slate-500 font-mono font-bold">
              Making Bad Ideas Slightly Safer.
            </span>
          </div>

          <button
            onClick={toggle}
            className="lg:hidden p-2 text-slate-400 hover:text-slate-200 transition-colors"
            aria-label="Toggle menu"
          >
            {open ? (
              <i className="fas fa-times text-lg" />
            ) : (
              <i className="fas fa-bars text-lg" />
            )}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 top-16 z-40 bg-[#0a0a0f]/95 backdrop-blur-xl transition-all duration-300 flex flex-col items-center justify-center gap-8 ${
          open
            ? 'opacity-100 visible translate-x-0'
            : 'opacity-0 invisible translate-x-full'
        }`}
      >
        <span className="text-lg text-slate-500 font-mono italic text-center px-6">
          Application security, offensive research, and DevSecOps
        </span>
        <div className="flex flex-col items-center gap-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={close}
              className="text-slate-200 text-lg font-medium hover:text-red-400 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
