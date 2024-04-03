import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface SidebarItemProps {
  href: string,
  icon: LucideIcon,
  label: string,
  active: boolean,
}
 
export default function SidebarItem({
  href,
  icon: Icon,
  label,
  active
} : SidebarItemProps) {
  return (
    <Link className={cn("flex items-center gap-4" ,active ? "text-accent" : "text-white")} href={href}>
      <Icon />
      {label}
    </Link>
  )
}
