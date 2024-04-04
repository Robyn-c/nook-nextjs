'use client'

import { FaGoogle } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

import { Button } from '@/components/ui/button'

export default function Social() {
  return (
    <div className='flex items-center w-full gap-x-2'>
      <Button
        size='lg'
        className='w-full rounded-lg'
        variant='secondary'
        onClick={() => {}}
      >
        <FaGoogle className='h-5 w-5 text-accent-300'/>
      </Button>
      <Button
        size='lg'
        className='w-full rounded-lg'
        variant='secondary'
        onClick={() => {}}
      >
        <FaGithub className='h-6 w-6 text-accent-300'/>
      </Button>
    </div>
  )
}
