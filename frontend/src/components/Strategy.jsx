import { useState } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { useInView } from 'react-intersection-observer'

ChartJS.register(ArcElement, Tooltip, Legend)

function Strategy() {
  const [init, setInit] = useState(false)
  const { ref, inView } = useInView({ threshold: 0.5 })

  if (inView && !init) setInit(true)

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '60%',
    plugins: {
      legend: { position: 'bottom', labels: { boxWidth: 10, font: { size: 10 } } },
    },
  }

  const data1 = {
    labels: ['ユニークビジター数', 'オーガニック検索', 'コンテンツ滞在時間'],
    datasets: [{
      label: '認知度',
      data: [40, 35, 25],
      backgroundColor: ['#3b82f6', '#60a5fa', '#93c5fd'],
      borderColor: '#ffffff',
      borderWidth: 2,
    }],
  }

  const data2 = {
    labels: ['登録ユーザー数', '案件問い合わせ数', 'NDA交換数'],
    datasets: [{
      label: 'エンゲージメント',
      data: [50, 30, 20],
      backgroundColor: ['#16a34a', '#22c55e', '#4ade80'],
      borderColor: '#ffffff',
      borderWidth: 2,
    }],
  }

  return (
    <section id="strategy" className="py-16 md:py-24 bg-white" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800">私たちの成長戦略</h2>
          <p className="text-stone-600 mt-2">テクノロジーと専門知識を融合させ、M&Aの未来を創造します。</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h3 className="font-bold text-lg mb-4 text-stone-800">開発ロードマップ</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mr-4">1</div>
                <div>
                  <h4 className="font-semibold">フェーズ1: 基盤構築 (MVP)</h4>
                  <p className="text-sm text-stone-600">信頼性の高い手動マッチングと、SEOに強いコンテンツハブで市場での認知度を獲得します。</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mr-4">2</div>
                <div>
                  <h4 className="font-semibold">フェーズ2: 機能強化と自動化</h4>
                  <p className="text-sm text-stone-600">オンラインでのNDA締結やユーザー間メッセージングを導入し、利便性を向上させます。</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold mr-4">3</div>
                <div>
                  <h4 className="font-semibold">フェーズ3: AIによる高度化</h4>
                  <p className="text-sm text-stone-600">AIを活用した高精度なマッチングアルゴリズムを導入し、成約率と速度を飛躍的に高めます。</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-stone-800">成功を測る指標 (KPI)</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="text-center p-4 rounded-lg bg-stone-50">
                <h4 className="font-semibold text-stone-700 mb-2 text-sm">認知度とトラフィック</h4>
                <div className="relative w-full max-w-[400px] mx-auto h-[250px]">
                  {init && <Doughnut data={data1} options={chartOptions} />}
                </div>
              </div>
              <div className="text-center p-4 rounded-lg bg-stone-50">
                <h4 className="font-semibold text-stone-700 mb-2 text-sm">エンゲージメント</h4>
                <div className="relative w-full max-w-[400px] mx-auto h-[250px]">
                  {init && <Doughnut data={data2} options={chartOptions} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Strategy
