'use client'
import { AccordionItem } from '@/components/ui/accordion';
import { AccordionTrigger } from '@/components/ui/accordion';
import Image from 'next/image';
import React from 'react'
import { cn } from '@/lib/utils';
export type Organization = {
    id: string;
    slug: string;
    imageUrl: string;
    name: string;
}

interface NavItemProps {
    isActive: boolean;
    isExpanded: boolean;
    organization: Organization;
    onExpand: (id: string) => void;
}
const NavItem = ({isActive, isExpanded, organization, onExpand} : NavItemProps) => {
  return (
    <AccordionItem value={organization.id} 
    className='border-none'>
        <AccordionTrigger onClick={() => onExpand(organization.id)} className={cn("flex items-center gap-x-2 p-2 text-neutral-700 rounded-md hover:bg-neutral-500/10 transition text-start no-underline hover:no-underline",
        isActive && !isExpanded && "bg-sky-500/10 text-sky-700"
        )}>
            <div className='flex items-center gap-x-2 '>
                <div className="w-7 h-7 relative">
                    <Image fill src={organization.imageUrl}
                    alt='organization' 
                    className='rounded-sm object-cover'>

                    </Image>
                </div>
            </div>
        </AccordionTrigger>
    </AccordionItem>
  )
}

export default NavItem