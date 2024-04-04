import React from 'react'

import { LoginButton } from '@/components/auth/login-button'
import { CircleUser } from 'lucide-react'

export default function SidebarLogin() {
  return (
    <LoginButton>
      <div className="flex items-center gap-4 text-2xl">
        <CircleUser/>
        Sign In
      </div>
    </LoginButton>
  )
}
