import React from 'react'

const ClerkLayoutPage = ({children} : {children: React.ReactNode}) => {
  return (
    <div  className="flex justify-center items-center h-full">
        {children}
    </div>
  )
}

export default ClerkLayoutPage