import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Features from '../components/Features.jsx'
import SellerSection from '../components/SellerSection.jsx'
import BuyerSection from '../components/BuyerSection.jsx'
import ProcessTimeline from '../components/ProcessTimeline.jsx'
import Strategy from '../components/Strategy.jsx'
import Faq from '../components/Faq.jsx'
import ContactForm from '../components/ContactForm.jsx'
import SiteFooter from '../components/SiteFooter.jsx'

function Landing() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <SellerSection />
        <BuyerSection />
        <ProcessTimeline />
        <Strategy />
        <Faq />
        <section id="contact" className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-6 max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-800">お問い合わせ</h2>
              <p className="text-stone-600 mt-2">ご相談、ご質問など、お気軽にお問い合わせください。</p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}

export default Landing
