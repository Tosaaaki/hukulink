function SellerSection() {
  return (
    <div id="seller-section" className="py-16 md:py-24 bg-sky-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-blue-600 font-semibold">FOR SELLERS</span>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mt-2 mb-4">大切な事業の価値を、最大化する</h2>
            <p className="text-stone-600 mb-6">従業員、取引先、そしてあなたの想いを、最適な後継者へと繋ぎます。私たちは、円滑で満足のいく事業承継を全力で支援します。</p>
            <ul className="space-y-4 text-stone-700">
              <li className="flex items-start"><span className="text-green-500 mr-3 mt-1">✔</span><span>無料で案件を登録し、自社の可能性を打診できます。</span></li>
              <li className="flex items-start"><span className="text-green-500 mr-3 mt-1">✔</span><span>経験豊富なアドバイザーが企業価値の評価をサポートします。</span></li>
              <li className="flex items-start"><span className="text-green-500 mr-3 mt-1">✔</span><span>交渉から成約まで、複雑な手続きをワンストップで支援します。</span></li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h4 className="font-bold text-lg text-center mb-4">売り手向けダッシュボード機能</h4>
            <div className="space-y-4">
              <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded-r-lg">
                <h5 className="font-semibold">かんたん案件登録</h5>
                <p className="text-sm text-stone-600">ガイドに従って入力するだけで、魅力的な案件概要を作成できます。</p>
              </div>
              <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded-r-lg">
                <h5 className="font-semibold">進捗の可視化</h5>
                <p className="text-sm text-stone-600">「審査中」「公開中」など、案件のステータスをひと目で確認できます。</p>
              </div>
              <div className="p-4 border-l-4 border-blue-500 bg-blue-50 rounded-r-lg">
                <h5 className="font-semibold">安全なメッセージ管理</h5>
                <p className="text-sm text-stone-600">興味を持った買い手とのやり取りを、安全な環境で行えます。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SellerSection
