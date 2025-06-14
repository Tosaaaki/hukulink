function ProcessTimeline() {
  return (
    <section id="process" className="py-16 md:py-24 bg-stone-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800">ご利用の流れ</h2>
          <p className="text-stone-600 mt-2">シンプルで透明性の高いプロセスにより、安心してM&Aを進めることができます。</p>
        </div>
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>
          <div className="space-y-12">
            <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
              <div className="text-center md:text-right md:pr-12">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold mb-2">1</div>
                <h3 className="text-xl font-bold text-stone-800">無料登録・相談</h3>
                <p className="text-sm text-stone-600 mt-1">まずは無料でユーザー登録。専門家があなたの状況やご希望をヒアリングします。</p>
              </div>
              <div className="hidden md:block"></div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
              <div className="hidden md:block"></div>
              <div className="text-center md:text-left md:pl-12">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold mb-2">2</div>
                <h3 className="text-xl font-bold text-stone-800">案件のマッチング</h3>
                <p className="text-sm text-stone-600 mt-1">（売り手）案件を登録し、（買い手）希望に合う案件を検索。最適な候補を探します。</p>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
              <div className="text-center md:text-right md:pr-12">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold mb-2">3</div>
                <h3 className="text-xl font-bold text-stone-800">交渉・基本合意</h3>
                <p className="text-sm text-stone-600 mt-1">秘密保持契約（NDA）を結び、条件交渉を開始。基本合意を目指します。</p>
              </div>
              <div className="hidden md:block"></div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
              <div className="hidden md:block"></div>
              <div className="text-center md:text-left md:pl-12">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-blue-600 text-white font-bold mb-2">4</div>
                <h3 className="text-xl font-bold text-stone-800">デューデリジェンス・最終契約</h3>
                <p className="text-sm text-stone-600 mt-1">専門家による買収監査を経て、最終的な契約条件を確定し、調印します。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessTimeline
