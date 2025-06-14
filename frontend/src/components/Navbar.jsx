import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import useActiveSection from '../hooks/useActiveSection.js'

function Navbar() {
  const navRef = useRef(null)
  const { activeId } = useActiveSection()

  useEffect(() => {
    const hero = document.querySelector('.hero-gradient')
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (navRef.current) {
          navRef.current.classList.toggle('hidden', entry.isIntersecting)
        }
      },
      { threshold: 0.1 }
    )
    if (hero) observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  return (
    <header ref={navRef} className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm hidden">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center h-16">
          <div className="text-lg font-bold text-blue-800">
            <Link to="/">M&A Platform</Link>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm text-stone-600">
            <a href="#features" className={activeId === 'features' ? 'active' : ''}>サービスの特徴</a>
            <a href="#process" className={activeId === 'process' ? 'active' : ''}>ご利用の流れ</a>
            <a href="#faq" className={activeId === 'faq' ? 'active' : ''}>よくある質問</a>
            <a href="#contact" className={activeId === 'contact' ? 'active' : ''}>お問い合わせ</a>
          </div>
          <div>
            <Link to="/login" className="bg-blue-600 text-white font-semibold py-2 px-5 rounded-full text-sm hover:bg-blue-700 transition-colors" aria-label="login">ログイン</Link>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
