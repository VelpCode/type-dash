"use client"

import { BellIcon, ChevronRight } from "lucide-react"
import { CommandDemo } from "./ui/Comdemo"
import { Command } from "./ui/command"
import { Button } from "./ui/button"

export default function Header() {

    return (
        <div>
            <div className = "grid grid-cols-2 gap-4 border-r p-4 border-b">
                <CommandDemo/>
                <div className = "flex items-center justify-end">
                    <Button variant = "outline" size = "icon">
                        <BellIcon className = "h4 w-4">

                            
                        </BellIcon>
                    </Button>
                </div>
            </div>
        </div>
    )


}