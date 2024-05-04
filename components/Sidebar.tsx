'use client';

import { Bell, BellIcon, Cookie, CreditCard, Inbox, MessageSquare, Settings, User } from "lucide-react";
import UserItem from "./UserItem";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "./ui/command";

export default function Sidebar() {

    const menuList = [
        {
            group: "General",
            items: [
                {
                    link: "/",
                    icon: <User></User>,
                    text: "Profile"
                },
                {
                    link: "/",
                    icon: <CreditCard></CreditCard>,
                    text: "Billing"
                },
                {
                    link: "/",
                    icon: <Inbox></Inbox>,
                    text: "Inbox"
                },
                {
                    link: "/",
                    icon: <MessageSquare></MessageSquare>,
                    text: "Messages"
                }
            ]
        },
        {
            group: "Settings",
            items: [
                {
                    link: "/",
                    text: "General Settings",
                    icon: <Settings></Settings>
                },
                {
                    link: "/",
                    text: "Privacy",
                    icon: <Cookie></Cookie>
                },
                {
                    link: "/",
                    text: "Notifications",
                    icon: <BellIcon></BellIcon>
                }
            ]
        }
            
    ]

    return (
        <div className="w-[300px] border-r h-screen flex flex-col min-h-screen p-4 ">
            <UserItem />
            <div className = "grow">
            <Command>
  <CommandInput placeholder="Type a command or search..." />
  <CommandList>
    {menuList.map((menu: any, key: number) => (

        <CommandGroup key = {key} heading = {menu.group}>
            {menu.items.map((option: any, optionKey: number) =>
            <CommandItem key = {optionKey} className="flex gap-2">
                {option.icon}
                {option.text}
                </CommandItem>
            )}

        </CommandGroup>

    ))}
  </CommandList>
</Command>

            </div>
        </div>
    )

}