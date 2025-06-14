function Hero() {
  return (
    <section className="hero-gradient pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">
          ビジネスの未来を、次のステージへ
        </h1>
        <p className="max-w-2xl mx-auto text-stone-600 md:text-lg mb-8">
          私たちは、売り手と買い手双方にとって最高の出会いを創出する、信頼のM&Aプラットフォームです。
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="#seller-section"
            className="w-full sm:w-auto bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-lg"
          >
            事業を譲渡したい方 (売り手)
          </a>
          <a
            href="#buyer-section"
            className="w-full sm:w-auto bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-50 transition-transform transform hover:scale-105 shadow-lg border border-blue-200"
          >
            事業を買収したい方 (買い手)
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
