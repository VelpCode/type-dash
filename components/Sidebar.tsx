'use client';

import { BellIcon, Cookie, CreditCard, Inbox, MessageSquare, Settings, User } from "lucide-react";
import UserItem from "./UserItem";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from "./ui/command";

export default function Sidebar() {

    const menuList = [
        {
            group: "General",
            items: [
                {
                    link: "/",
                    text: "Profile"
                },
                {
                    link: "/",
                    text: "Billing"
                },
                {
                    link: "/",
                    text: "Inbox"
                },
                {
                    link: "/",
                    text: "Billing"
                }
            ]
        },
        {
            group: "Settings",
            items: [
                {
                    link: "/",
                    text: "General Settings"
                },
                {
                    link: "/",
                    text: "Privacy"
                },
                {
                    link: "/",
                    text: "Notifications"
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
            <CommandItem key = {optionKey}>{option.text}</CommandItem>
            )}

        </CommandGroup>

    ))}
  </CommandList>
</Command>

            </div>
        </div>
    )

}