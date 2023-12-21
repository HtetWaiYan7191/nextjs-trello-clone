"use client";

import { Plus } from "lucide-react";
import Link from "next/link";
import { useLocalStorage } from "usehooks-ts";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import NavItem, { Organization } from "./nav-item";

interface SideBarProps {
  storageKey?: string;
}

export const SideBar = ({ storageKey = "t-sidebar-state" }: SideBarProps) => {
  const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(
    storageKey,
    {}
  );
  const { organization: activeOrganization, isLoaded: isLoadedOrg } =
    useOrganization();
  const { userMemberships, isLoaded: isLoadedOrgList } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });

  const defaultAccordionValue: string[] = Object.keys(expanded).reduce((acc: string[], key:string) => {
    if(expanded[key]) {
        acc.push(key);
    }

    return acc;
  }, []);

  const onExpand = (id: string) => {
    setExpanded((curr) => ({
        ...curr,
        [id]: !expanded[id],
    }));
  };

  if(!isLoadedOrg || !isLoadedOrgList || userMemberships.isLoading) {
    return (
        <>
            <Skeleton/>
        </>
    )
  }


  return (
    <>
        <div className="flex font-medium text-xs items-center mb-1">
            <span className="pl-4">WorkSpaces</span>
            <Button size="icon" type="button" className="ml-auto" variant='ghost' asChild>
                <Link href="/select-org">
                    <Plus className="h-4 w-4"/>
                </Link>
            </Button>
        </div>

        <Accordion type="multiple" defaultValue={defaultAccordionValue} className="space-y-2">
            {userMemberships.data.map(({organization}) => (
                <NavItem key={organization.id} 
                isActive={activeOrganization?.id === organization.id}
                isExpanded={expanded[organization.id]}
                organization={organization as Organization}
                onExpand={onExpand}/>
            ))}
        </Accordion>
    </>
  )
  ;
};
