"use client"

import { CommandDemo } from "./ui/Comdemo"
import { Command } from "./ui/command"

export default function Header() {

    return (
        <div>
            <div className = "flex gap-4 border-r p-4 border-b">
                <CommandDemo/>
            </div>
        </div>
    )


}