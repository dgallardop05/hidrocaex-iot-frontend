import { Outlet } from 'react-router-dom'
import Navbar from '@/components/layout/Navbar'

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Navbar />

      <main className="flex flex-1 p-4">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout