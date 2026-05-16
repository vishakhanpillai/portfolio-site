export default function Footer() {
  return (
    <footer className="mt-24 pt-8 border-t border-white/5">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 font-mono">
        <span>Built With OpenCode and Github Copilot</span>
        <span className="flex items-center gap-2">
          {/* <i className="fas fa-circle text-[6px] text-emerald-500" /> */}
          Open to opportunities
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        </span>
      </div>
    </footer>
  )
}
