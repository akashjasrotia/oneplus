import React, { useEffect, useRef, useState } from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function App() {
  const barRef = useRef(null)
  const [loading, setLoading] = useState(true)

  useGSAP(() => {
    gsap.to(barRef.current, {
      width: '100%',
      duration: 3,
      ease: 'power.out',
    })
  }, [loading])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="flex flex-col gap-4 items-center justify-center h-screen bg-white">
        <div className="fixed top-0 left-0 w-full">
          <Navbar />
        </div>
        <h1 className='font-oneplus'>Please Wait...</h1>
        <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
          
          <div
            ref={barRef}
            className="h-full bg-black rounded-full w-0"
          ></div>
        </div>
      </div>
    )
  }

  return <Home />
}
