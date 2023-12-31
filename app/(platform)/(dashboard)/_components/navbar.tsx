import Logo from '@/components/logo'
import { Button } from '@/components/ui/button'
import { OrganizationSwitcher, UserButton } from '@clerk/nextjs'
import { Plus } from 'lucide-react'
import React from 'react'
import MobileSideBar from './mobile-side-bar'
const Navbar = () => {
  return (
    <div className='fixed z-50 top-0 w-full h-14 border-b shadow-sm
     bg-white flex items-center px-5'>
       <MobileSideBar/>
       <div className="flex items-center gap-x-4 ">
            <div className="hidden md:flex">
                <Logo/>
            </div>

            <Button size="sm" className='rounded-sm bg-sky-800 hover:bg-sky-600 text-white/90 hidden md:block h-auto py-1.5 px-2.5'>
                Create 
            </Button>

            <Button size="sm" className='rounded-sm bg-sky-800 hover:bg-sky-600 text-white/90 block md:hidden h-auto py-1.5 px-2.5'>
                <Plus className="h-4 w-4"/>
            </Button>
       </div>
       <div className='ml-auto flex '>
            <OrganizationSwitcher hidePersonal
            afterCreateOrganizationUrl="/organization/:id"
            afterLeaveOrganizationUrl='/select-org'
            afterSelectOrganizationUrl='/organization/:id'
            appearance={{
                elements: {
                    rootBox: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    },
                },
            }}
            />
            <UserButton afterSignOutUrl='/'
            appearance={{
                elements: {
                    avatarBox: {
                        height: 30,
                        width: 30,
                    }
                }
            }}/>

       </div>
    </div>
  )
}

export default Navbar