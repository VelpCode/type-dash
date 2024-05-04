'use client';

export default function UserItem() {
    return (
    <div className="flex items-center justify-between gap-2 border rounded-[10px] p-4 ">
    <div className = "avatar rounded-full min-h-10 min-w-12 bg-red-300 text-white font-[700] flex items-center justify-center p-4">
        <p>AV</p>
    </div>
    <div>
        <p className = "font-bold">Aman Velp</p>
        <p className="text-[12px] text-neutral-500">velpmail@gmail.com</p>
    </div>
    </div>
    )
}


