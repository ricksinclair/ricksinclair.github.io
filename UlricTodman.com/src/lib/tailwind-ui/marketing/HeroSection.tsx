'use client'

import Link from 'next/link'
import clsx from 'clsx'

interface HeroSectionProps {
  title: string
  subtitle?: string
  description?: string
  primaryAction?: {
    text: string
    href: string
  }
  secondaryAction?: {
    text: string
    href: string
  }
  backgroundImage?: string
  className?: string
}

export function HeroSection({
  title,
  subtitle,
  description,
  primaryAction,
  secondaryAction,
  backgroundImage,
  className
}: HeroSectionProps) {
  return (
    <div className={clsx('relative bg-white', className)}>
      {backgroundImage && (
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover"
            src={backgroundImage}
            alt=""
          />
          <div className="absolute inset-0 bg-gray-500 mix-blend-multiply" aria-hidden="true" />
        </div>
      )}
      
      <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="text-center">
          {subtitle && (
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              <span className="block xl:inline">{subtitle}</span>
            </h1>
          )}
          
          <h2 className={clsx(
            'font-bold tracking-tight',
            subtitle 
              ? 'mt-3 text-xl text-gray-500 sm:text-2xl' 
              : 'text-4xl text-gray-900 sm:text-5xl lg:text-6xl'
          )}>
            {title}
          </h2>
          
          {description && (
            <p className="mx-auto mt-5 max-w-xl text-xl text-gray-500">
              {description}
            </p>
          )}
          
          {(primaryAction || secondaryAction) && (
            <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
              <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                {primaryAction && (
                  <Link
                    href={primaryAction.href}
                    className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow hover:bg-indigo-700 sm:px-8"
                  >
                    {primaryAction.text}
                  </Link>
                )}
                
                {secondaryAction && (
                  <Link
                    href={secondaryAction.href}
                    className="flex items-center justify-center rounded-md border border-transparent bg-indigo-100 px-4 py-3 text-base font-medium text-indigo-700 shadow hover:bg-indigo-200 sm:px-8"
                  >
                    {secondaryAction.text}
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}