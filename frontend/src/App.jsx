import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'

// Router を提供するコンテナ
function App() {
  return <RouterProvider router={router} />
}

export default App
