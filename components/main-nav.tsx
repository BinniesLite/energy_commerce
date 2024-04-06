"use client"

import { useParams, usePathname, useRouter } from "next/navigation"

import { ShoppingCart } from "lucide-react"

import Link from "next/link"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"


export const MainNav = () => {
    const router = useRouter()
    const pathName = usePathname()
    
    const routes = [
        {
           href: "/",
           label: "Trang Chủ",
           isActive: pathName === "/",
        },
        {
            href: "/products",
            label: "Sản Phẩm",
            isActive: pathName === "/products",
        },
        {
            href: "/about",
            label: "Về chúng tôi",
            isActive: pathName === "/about",
        },
        {
            href: "/contact",
            label: "Liên Lạc",
            isActive: pathName === "/contact",
        }
    ]
    
    return <div className="flex justify-between">
        {routes.map((route) => (
            <Button variant="ghost" className={cn(route.isActive && "bg-black text-white", "mx-2")} key={route.href}>
                <Link href={route.href}>{route.label}</Link>
            </Button> 
        ))}

        <Button variant="ghost" className="mr-4">
            <ShoppingCart className="h-4 w-4"/>
        </Button>
    </div>
}