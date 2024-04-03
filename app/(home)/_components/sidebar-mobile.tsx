import React from 'react'

import { Menu } from 'lucide-react'

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import SidebarRoutes from './sidebar-routes'

export default function SidebarMobile() {
  return (
    <Sheet>
      <SheetTrigger className='sm:hidden'>
        <Menu size={32} />
      </SheetTrigger>
      <SheetContent side="left" className='py-24 w-72'>
        <SidebarRoutes />
      </SheetContent>
    </Sheet>
  )
}
