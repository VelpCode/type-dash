'use client';

import UserItem from "./UserItem";

export default function Sidebar() {

    return (
        <div className="w-[300px] border-r h-screen flex flex-col min-h-screen p-4 ">
            <UserItem />
            <div>User Part</div>
            <div className = "grow">Menu</div>
        </div>
    )

}