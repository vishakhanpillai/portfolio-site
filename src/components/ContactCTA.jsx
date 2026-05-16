import { useReveal } from '../hooks/useReveal'

export default function ContactCTA() {
  const ref = useReveal()

  return (
    <section className="reveal" ref={ref}>
      <div className="gradient-border p-8 md:p-10 text-center">
        <h2 className="text-2xl font-bold text-slate-100 mb-3">Open to Security Roles</h2>
        <p className="text-slate-400 max-w-md mx-auto mb-6">
          If you need someone for application security, DevSecOps, vulnerability analysis, or
          offensive security work, I&apos;m open to opportunities and collaboration.
        </p>
        <div className="flex items-center justify-center gap-4">

          <a
            href="https://linkedin.com/in/vishakhanpillai"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-slate-200 text-sm font-semibold hover:bg-white/10 transition-all duration-300 hover:-translate-y-0.5"
          >
            <i className="fab fa-linkedin-in" />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
