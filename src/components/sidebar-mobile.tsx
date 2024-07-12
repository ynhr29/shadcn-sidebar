"use client"

import { SideBarItems } from "@/types"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet"
import { Button } from "./ui/button"
import { LogOut, Menu, MoreHorizontal, Settings, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { SidebarButton, SidebarButtonSheet } from "./sidebar-button"
import Link from "next/link"
import { Separator } from "./ui/separator"
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "./ui/drawer"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

interface SidebarMobileProps {
  sidebarItems: SideBarItems
}

export const SidebarMobile = (props: SidebarMobileProps) => {
  const pathname = usePathname()
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" className="fixed top-3 left-3">
          <Menu size={20} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="px-3 py-4" hideClose>
        <SheetHeader className="flex flex-row justify-between item-center space-y-0">
          <span className="text-lg font-semibold text-foreground mx-3">
            Twitter
          </span>
          <SheetClose asChild>
            <Button variant="ghost" className="h7 w-7 p-0">
              <X size={15} />
            </Button>
          </SheetClose>
        </SheetHeader>
        <div className="h-full">
          <div className="mt-5 flex flex-col w-full gap-1">
            {props.sidebarItems.links.map((link, index) => (
              <Link key={index} href={link.href}>
                <SidebarButtonSheet
                  variant={pathname === link.href ? "secondary" : "ghost"}
                  icon={link.icon}
                  className="w-full"
                >
                  {link.label}
                </SidebarButtonSheet>
              </Link>
            ))}
            {props.sidebarItems.extras}
          </div>
          <div className="absolute w-full bottom-4 px-1 left-0 w-f">
            <Separator className="absolute -top-3 left-0 w-full" />
            <Drawer>
              <Button variant="ghost" className="w-full justify-start">
                <DrawerTrigger asChild>
                  <div className="flex justify-between items-center w-full">
                    <div className="flex gap-2">
                      <Avatar className="h-5 w-5">
                        <AvatarImage src="https://github.com/yoneha.png" />
                        <AvatarFallback>yoneha</AvatarFallback>
                      </Avatar>
                      <span>yoneha</span>
                    </div>
                    <MoreHorizontal size={20} />
                  </div>
                </DrawerTrigger>

                <DrawerContent className="mb-2  p-2 ">
                  <div className="flex flex-col space-y-2 mt-2">
                    <Link href="/">
                      <DrawerClose asChild>
                        <SidebarButton
                          size="sm"
                          icon={Settings}
                          className="w-full"
                        >
                          Account Settings
                        </SidebarButton>
                      </DrawerClose>
                    </Link>
                    <DrawerClose asChild>
                      <SidebarButton size="sm" icon={LogOut} className="w-full">
                        LogOut
                      </SidebarButton>
                    </DrawerClose>
                  </div>
                </DrawerContent>
              </Button>
            </Drawer>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
