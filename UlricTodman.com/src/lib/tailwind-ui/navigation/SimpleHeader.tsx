'use client'

import { useState } from 'react'
import Link from 'next/link'
import { 
  Popover, 
  PopoverButton, 
  PopoverPanel, 
  PopoverBackdrop 
} from '@headlessui/react'
import clsx from 'clsx'

interface SimpleHeaderProps {
  navigation: Array<{
    name: string
    href: string
  }>
  logo?: string
  className?: string
}

function MenuIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M3 6h18M3 12h18M3 18h18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function CloseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function SimpleHeader({ navigation, logo, className }: SimpleHeaderProps) {
  return (
    <header className={clsx('bg-white shadow', className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              {logo ? (
                <img className="h-8 w-auto" src={logo} alt="Logo" />
              ) : (
                <div className="text-xl font-bold text-gray-900">Logo</div>
              )}
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Mobile menu */}
          <div className="-mr-2 flex items-center sm:hidden">
            <Popover>
              <PopoverButton className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              </PopoverButton>
              
              <PopoverBackdrop className="fixed inset-0 z-20 bg-black bg-opacity-25" />
              
              <PopoverPanel className="absolute inset-x-0 top-0 z-30 origin-top-right transform p-2 transition">
                <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                      <div>
                        {logo ? (
                          <img className="h-8 w-auto" src={logo} alt="Logo" />
                        ) : (
                          <div className="text-xl font-bold text-gray-900">Logo</div>
                        )}
                      </div>
                      <div className="-mr-2">
                        <PopoverButton className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="absolute -inset-0.5" />
                          <span className="sr-only">Close menu</span>
                          <CloseIcon className="h-6 w-6" aria-hidden="true" />
                        </PopoverButton>
                      </div>
                    </div>
                    <div className="mt-6">
                      <nav className="grid gap-y-8">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                          >
                            <span className="ml-3 text-base font-medium text-gray-900">
                              {item.name}
                            </span>
                          </Link>
                        ))}
                      </nav>
                    </div>
                  </div>
                </div>
              </PopoverPanel>
            </Popover>
          </div>
        </div>
      </div>
    </header>
  )
}