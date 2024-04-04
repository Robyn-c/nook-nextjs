import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import Logo from "@/public/nook-logo.svg"
import SidebarRoutes from './sidebar-routes'
import SidebarLogin from './sidebar-login'

export default function Sidebar() {
  return (
    <>
      <div className='space-y-14'>
        <Link href="/">
          <Image className="w-44" src={Logo} alt="Nook Logo"/>
        </Link>
        <SidebarRoutes />
      </div>
      <SidebarLogin />
    </>
  )
}
