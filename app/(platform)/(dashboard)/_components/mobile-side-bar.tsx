'use client'
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent } from '@/components/ui/sheet';
import { useMobileSideBar } from '@/hooks/use-mobile-sidebar'
import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { SideBar } from './sidebar';
const MobileSideBar = () => {
   const {onOpen, onClose, isOpen } = useMobileSideBar();
   const pathName = usePathname();
   const [isMounted, setIsMounted] = useState(false);

   useEffect(() => {
    setIsMounted(true);
   }, []);

   useEffect(() => {
    onClose();
   },[pathName, onClose])

   if(!isMounted) {
    return null;
   }

  return (
    <>
        <Button onClick={onOpen} className='block md:hidden' variant="ghost" size="sm">
            <Menu className='h-4 w-4'/>
        </Button>
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent side="left" className='p-2 pt-10'>
                <SideBar storageKey="t-sidebar-mobile-state">

                </SideBar>
            </SheetContent>
        </Sheet>
    </>
  )
}

export default MobileSideBar