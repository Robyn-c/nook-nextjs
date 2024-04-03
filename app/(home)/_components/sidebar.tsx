import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import Logo from "@/public/nook-logo.svg"
import SidebarRoutes from './sidebar-routes'

export default function Sidebar() {
  return (
      <>
        <Link href="/">
          <Image className="w-44" src={Logo} alt="Nook Logo"/>
        </Link>
        <SidebarRoutes />
      </>
  )
}
