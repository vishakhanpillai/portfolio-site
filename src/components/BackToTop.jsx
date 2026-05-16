import { useState, useEffect } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    function onScroll() {
      setVisible(document.documentElement.scrollTop > 500)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!visible) return null

  return (
    <button
      onClick={scrollToTop}
      title="Go To Top"
      className="fixed bottom-6 right-6 z-50 p-3 bg-red-600/90 backdrop-blur-sm rounded-xl text-white shadow-lg shadow-red-600/20 hover:bg-red-500 hover:shadow-red-500/30 transition-all duration-300 hover:-translate-y-1"
    >
      <i className="fas fa-arrow-up" />
    </button>
  )
}
