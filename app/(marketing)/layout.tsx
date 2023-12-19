import React from 'react'

const MarketingPageLayout = ({children} : {children : React.ReactNode}) => {
  return (
    <div className='bg-slate-200 h-full'>
        { /* navbar */}
        <main className=''>
            {children}
        </main>
        { /* footer */}
    </div>
  )
}

export default MarketingPageLayout