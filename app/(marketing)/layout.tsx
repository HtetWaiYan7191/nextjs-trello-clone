import React from 'react'
import Navbar from './_components/navbar'

const MarketingPageLayout = ({children} : {children : React.ReactNode}) => {
  return (
    <div className='bg-slate-200 h-full'>
        <Navbar/>
        <main className=''>
            {children}
        </main>
        { /* footer */}
    </div>
  )
}

export default MarketingPageLayout