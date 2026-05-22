import { Outlet } from 'react-router-dom'

import Sidebar from '@/components/layout/Sidebar'

import Navbar from '@/components/layout/Navbar'

const MainLayout = () => {
  return (
    <div className="
      min-h-screen
      bg-gray-900
      text-white
      flex
      flex-col
      lg:flex-row
    ">
      <Sidebar />

      <div className="
        flex
        flex-col
        flex-1
      ">
        <Navbar />

        <main className="
          flex-1
          p-6
          flex
        ">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default MainLayout