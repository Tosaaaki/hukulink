import { createBrowserRouter } from 'react-router-dom'
import Home from './Home.jsx'

// Home ルートを定義
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
])

export default router
