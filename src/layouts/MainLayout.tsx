import { Outlet } from 'react-router-dom'

import Sidebar from '@/components/layout/Sidebar'

import Navbar from '@/components/layout/Navbar'

const MainLayout = () => {
  return (
    <div className="
      min-h-screen

      bg-gradient-to-br
      from-[#050816]
      via-[#081225]
      to-[#0b1730]

      text-white

      flex
      flex-col
      lg:flex-row

      overflow-hidden
    ">
      <Sidebar />

      <div className="
        flex
        flex-col
        flex-1

        backdrop-blur-sm
      ">
      <div className="
        fixed

        top-[-200px]
        right-[-200px]

        w-[500px]
        h-[500px]

        rounded-full

        bg-blue-500/10

        blur-3xl

        pointer-events-none
      "/>

      <div className="
        fixed

        bottom-[-200px]
        left-[-200px]

        w-[500px]
        h-[500px]

        rounded-full

        bg-cyan-500/10

        blur-3xl

        pointer-events-none
      "/>
        <Navbar />

        <main className="
          flex-1

          p-6
          md:p-8

          flex

          overflow-y-auto
        ">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default MainLayout