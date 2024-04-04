"use client"
import React from 'react'

import { usePathname } from 'next/navigation'
import { Home, Search, User } from 'lucide-react';

import SidebarItem from './sidebar-item';

export default function SidebarRoutes() {

  const pathname = usePathname();

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === '/',
      icon: Home
    },
    {
      href: "/search",
      label: "Search",
      active: pathname === "/search",
      icon: Search
    },
    {
      href: "/account",
      label: "Account",
      active: pathname === "/account",
      icon: User
    },
  ]

  return (
    <nav className="flex flex-col text-2xl item font-medium gap-6">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          href={route.href}
          label={route.label}
          icon={route.icon}
          active={route.active}
        />
      ))}
    </nav>
  )
}
