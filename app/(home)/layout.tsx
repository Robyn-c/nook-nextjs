import React from 'react'

import Sidebar from './_components/sidebar'
import SidebarMobile from './_components/sidebar-mobile'

export default function HomeLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="">
      <div className="h-full w-72 fixed hidden sm:flex justify-between flex-col gap-12 py-10 px-8 shadow-sm shadow-accent-500">
        <Sidebar/>
      </div>
      <div className="h-full flex p-8">
        <SidebarMobile/>
      </div>
      <main className="sm:pl-72">
        {children}
      </main>
    </div>
    
  )
}
