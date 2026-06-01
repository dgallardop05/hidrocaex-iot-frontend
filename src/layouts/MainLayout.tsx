import { Outlet } from 'react-router-dom'

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
    ">
      <div className="
        flex
        flex-col
        min-h-screen

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

          overflow-y-auto
        ">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default MainLayout