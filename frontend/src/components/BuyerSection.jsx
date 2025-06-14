function BuyerSection() {
  return (
    <div id="buyer-section" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-white p-8 rounded-xl shadow-lg order-2 md:order-1">
            <h4 className="font-bold text-lg text-center mb-4">買い手向けダッシュボード機能</h4>
            <div className="space-y-4">
              <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded-r-lg">
                <h5 className="font-semibold">高精度な案件検索</h5>
                <p className="text-sm text-stone-600">業種、地域、事業規模など、詳細な条件で理想の案件を探せます。</p>
              </div>
              <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded-r-lg">
                <h5 className="font-semibold">ウォッチリスト</h5>
                <p className="text-sm text-stone-600">気になる案件を保存し、後からじっくり比較検討できます。</p>
              </div>
              <div className="p-4 border-l-4 border-green-500 bg-green-50 rounded-r-lg">
                <h5 className="font-semibold">NDA締結・管理</h5>
                <p className="text-sm text-stone-600">プラットフォーム上でスムーズに秘密保持契約を締結・管理できます。</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <span className="text-green-600 font-semibold">FOR BUYERS</span>
            <h2 className="text-2xl md:text-3xl font-bold text-green-800 mt-2 mb-4">新たな成長機会を、効率的に発見する</h2>
            <p className="text-stone-600 mb-6">事業の多角化、エリア拡大、新規市場への参入。あなたの成長戦略に合致する、ポテンシャルの高いビジネスとの出会いを創出します。</p>
            <ul className="space-y-4 text-stone-700">
              <li className="flex items-start"><span className="text-green-500 mr-3 mt-1">✔</span><span>非公開案件を含む、質の高い多様な案件にアクセスできます。</span></li>
              <li className="flex items-start"><span className="text-green-500 mr-3 mt-1">✔</span><span>新着案件やおすすめ案件をタイムリーにお知らせします。</span></li>
              <li className="flex items-start"><span className="text-green-500 mr-3 mt-1">✔</span><span>デューデリジェンスから契約まで、専門家が伴走します。</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuyerSection
