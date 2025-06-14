import { useState } from 'react'

function ContactForm() {
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    if (!form.checkValidity()) return
    await new Promise((resolve) => setTimeout(resolve, 500))
    setSuccess(true)
  }

  if (success) {
    return (
      <div className="mt-8 text-center p-4 bg-green-100 text-green-800 rounded-lg">
        お問い合わせいただきありがとうございます。内容を確認の上、担当者よりご連絡いたします。
      </div>
    )
  }

  return (
    <div id="contact-form-container" className="bg-white p-8 rounded-xl shadow-lg border border-stone-200">
      <form id="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">
              お名前 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-3 py-2 border border-stone-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-stone-700 mb-1">会社名</label>
            <input
              type="text"
              id="company"
              name="company"
              className="w-full px-3 py-2 border border-stone-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">
            メールアドレス <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2 border border-stone-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="inquiry_type" className="block text-sm font-medium text-stone-700 mb-1">
            お問い合わせ種別 <span className="text-red-500">*</span>
          </label>
          <select
            id="inquiry_type"
            name="inquiry_type"
            required
            className="w-full px-3 py-2 border border-stone-300 rounded-md bg-white focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">選択してください</option>
            <option value="seller">事業の売却に関するご相談</option>
            <option value="buyer">事業の買収に関するご相談</option>
            <option value="other">その他のお問い合わせ</option>
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">
            お問い合わせ内容 <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            className="w-full px-3 py-2 border border-stone-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-700 transition-colors shadow-md"
            aria-label="submit contact"
          >
            送信する
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
