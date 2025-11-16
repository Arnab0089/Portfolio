import React from 'react'
import ThemeToggle from '../Theme/ThemeToggle'
import StarBackground from '../Theme/StarBackground'

export default function Home() {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
        <ThemeToggle/>
        <StarBackground/>
      
    </div>
  )
}
