import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
    DropdownMenuItem
} from './ui/dropdown-menu'
import { Button } from './ui/button'

const HamburgerMenu = () => {
  return (
    <div>
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button variant={'dotted'} className='flex items-center'>
                    Menu
                    <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m8 10 4 4 4-4"/>
                    </svg>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    Portfolio
                </DropdownMenuItem>
                <DropdownMenuItem>
                    Services
                </DropdownMenuItem>
                <DropdownMenuItem>
                    Connect
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    </div>
  )
}

export default HamburgerMenu