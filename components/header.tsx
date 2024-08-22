import Link from 'next/link'
import Image from 'next/image'
import React, { Children } from 'react'
import { cn } from '@/lib/utils'

const header = ({children, className}: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
        <Link href='/' className='md:flex-1'>
        <Image 
                src="/assets/icons/logo.svg"
                alt="logo with name"
                width={120}
                height={32}
                className="hidden md:block" 
            />
            <Image 
                src="/assets/icons/logo-icon.svg"
                alt="logo "
                width={32}
                height={32}
                className="mr-2 md:hidden" 
            />
        </Link>
        {children}
    </div>
  )
}

export default header