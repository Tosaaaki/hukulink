import { useState } from 'react'

const faqList = [
  {
    q: '相談や登録に費用はかかりますか？',
    a: 'ご相談やユーザー登録、売り手様の案件掲載は無料です。私たちは完全成功報酬制を基本としており、M&Aが成約するまで費用は一切いただきません。',
  },
  {
    q: '会社の情報が外部に漏れることはありませんか？',
    a: 'ご安心ください。初期段階では企業名などを匿名化した情報のみを公開します。具体的な情報開示は、買い手候補と秘密保持契約（NDA）を締結した後のみとなります。',
  },
  {
    q: '地方の中小企業でも利用できますか？',
    a: 'はい、もちろんです。私たちは全国の企業様を対象としており、地域に関わらず、すべての企業様に平等な機会を提供することを目指しています。',
  },
]

function Faq() {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="py-16 md:py-24 bg-stone-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800">よくあるご質問</h2>
        </div>
        <div className="space-y-4">
          {faqList.map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-sm">
              <button
                type="button"
                aria-expanded={open === idx}
                onClick={() => setOpen(open === idx ? null : idx)}
                className="accordion-toggle w-full flex justify-between items-center p-5 text-left font-semibold text-stone-800"
              >
                <span>{item.q}</span>
                <span className="transform transition-transform duration-300 text-blue-500 text-xl font-light">
                  {open === idx ? '-' : '+'}
                </span>
              </button>
              {open === idx && (
                <div className="px-5 pb-5">
                  <p className="text-stone-600">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq
