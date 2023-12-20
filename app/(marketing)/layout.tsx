import React from 'react'
import Navbar from './_components/navbar'
import Footer from './_components/footer'

const MarketingPageLayout = ({children} : {children : React.ReactNode}) => {
  return (
    <div className='bg-slate-200 h-full'>
        <Navbar/>
        <main className=''>
            {children}
        </main>
        <Footer/>
    </div>
  )
}

export default MarketingPageLayout