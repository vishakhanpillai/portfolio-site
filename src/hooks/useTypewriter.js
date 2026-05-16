import { useState, useEffect } from 'react'

export function useTypewriter(text, speed = 80) {
  const [displayed, setDisplayed] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    let i = 0
    setDisplayed('')
    setShowCursor(true)

    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.substring(0, i + 1))
        i++
      } else {
        clearInterval(interval)
        setTimeout(() => setShowCursor(false), 3000)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed])

  return { displayed, showCursor }
}
