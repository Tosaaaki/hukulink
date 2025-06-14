import { useEffect, useState } from 'react'

const sectionIds = ['features', 'seller-section', 'buyer-section', 'process', 'strategy', 'faq', 'contact']

function useActiveSection() {
  const [activeId, setActiveId] = useState('')
  useEffect(() => {
    const sections = sectionIds.map((id) => document.getElementById(id))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-50% 0px -50% 0px' }
    )
    sections.forEach((s) => s && observer.observe(s))
    return () => observer.disconnect()
  }, [])
  return { activeId }
}

export default useActiveSection
