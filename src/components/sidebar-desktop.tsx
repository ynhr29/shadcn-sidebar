import { SidebarButton } from "./sidebar-button"
import { SideBarItems } from "@/types"
import Link from "next/link"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { LogOut, Menu, MoreHorizontal, Settings, Sidebar } from "lucide-react"
import { usePathname } from "next/navigation"

interface SidebarDesktopProps {
  sidebarItems: SideBarItems
}

export const SidebarDesktop = (props: SidebarDesktopProps) => {
  const pathname = usePathname()

  return (
    <aside className="min-w-[270px] h-screen border-r">
      <div className="h-full flex flex-col">
        <h3 className="mt-4 mx-3 text-lg font-semibold text-foreground flex items-center">
          <Button size="icon" variant="ghost" className="top-3 left-3">
            <Menu size={20} />
          </Button>
          <div className="ml-2">SystemTitle</div>
        </h3>
        {/* サイドメニュー */}
        <div className="mt-5 mx-3 flex-grow">
          <div className="flex flex-col gap-1">
            {props.sidebarItems.links.map((link, index) => {
              return (
                <Link key={index} href={link.href}>
                  <SidebarButton
                    variant={pathname === link.href ? "secondary" : "ghost"}
                    icon={link.icon}
                    className="w-full"
                  >
                    {link.label}
                  </SidebarButton>
                </Link>
              )
            })}
            {props.sidebarItems.extras}
          </div>
        </div>
        {/* サイドメニューフッター */}
        <div className="py-3">
          <Separator className="mb-3" />
          <div className="mx-3">
            <Popover>
              <Button variant="ghost" className="w-full">
                <PopoverTrigger asChild>
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
                </PopoverTrigger>

                <PopoverContent className="mb-2 w-56 p-3 rounded-2xl">
                  <div className="space-y-1">
                    <Link href="/">
                      <SidebarButton
                        size="sm"
                        icon={Settings}
                        className="w-full"
                      >
                        Account Settings
                      </SidebarButton>
                    </Link>
                    <SidebarButton size="sm" icon={LogOut} className="w-full">
                      LogOut
                    </SidebarButton>
                  </div>
                </PopoverContent>
              </Button>
            </Popover>
          </div>
        </div>
      </div>
    </aside>
  )
}
