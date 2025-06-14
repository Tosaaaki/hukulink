import { Outlet } from 'react-router-dom'

// すべてのページに共通のヘッダーを配置するレイアウト
function AppLayout() {
  return (
    <main className="min-h-screen">
      <Outlet />
    </main>
  )
}

export default AppLayout
