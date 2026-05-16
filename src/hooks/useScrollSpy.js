import { useState, useEffect } from 'react'

export function useScrollSpy(sectionIds, offset = 200) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    function onScroll() {
      let current = ''
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && window.pageYOffset >= el.offsetTop - offset) {
          current = id
        }
      }
      setActiveId(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [sectionIds, offset])

  return activeId
}
