import React from 'react'
import Navbar from '../components/Navbar'
import Landing from '../components/Landing'
import Page2 from '../components/page2'
import All from '../components/All'
export default function Home() {
  return (
    <div>
        <Navbar/>
        <Landing/>
        <All/>
        <Page2/>
    </div>
  )
}