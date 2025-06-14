function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800">私たちのプラットフォームが選ばれる理由</h2>
          <p className="text-stone-600 mt-2">ユーザー一人ひとりの成功を第一に考えた、直感的で安全な機能を提供します。</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4 text-3xl">🤝</div>
            <h3 className="font-bold text-lg mb-2">信頼できるマッチング</h3>
            <p className="text-sm text-stone-600">専門家が介在し、質の高い案件のみを掲載。安心して交渉を進められます。</p>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4 text-3xl">🔐</div>
            <h3 className="font-bold text-lg mb-2">徹底した秘密保持</h3>
            <p className="text-sm text-stone-600">情報は匿名で公開。NDA締結まで企業が特定されることはありません。</p>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mx-auto mb-4 text-3xl">🧭</div>
            <h3 className="font-bold text-lg mb-2">専門家によるサポート</h3>
            <p className="text-sm text-stone-600">プロセス全体を通じて、経験豊富な専門家があなたをサポートします。</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
