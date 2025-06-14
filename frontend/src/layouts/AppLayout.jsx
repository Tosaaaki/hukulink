import { Outlet, Link } from 'react-router-dom'

// すべてのページに共通のヘッダーを配置するレイアウト
function AppLayout() {
  return (
    <>
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between">
          <Link to="/" className="font-bold text-xl text-blue-800">M&A Platform</Link>
          <nav className="space-x-4 text-sm text-stone-600">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <Link to="/login" className="hover:text-blue-600">Login</Link>
          </nav>
        </div>
      </header>
      <main className="min-h-screen">
        <Outlet />
      </main>
    </>
  )
}

export default AppLayout
