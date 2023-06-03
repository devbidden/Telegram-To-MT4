"use client"
import Link from "next/link"
import Image from "next/image"
import bot3 from '@/public/bot-3.jpg'

const Nav: React.FC = () => {
    return (
        <nav className="px-10 md:px-16 py-1.5 md:py-3 bg-clr-0 fixed top-0 w-full">
            <div className="flex items-center justify-between mx-auto">
                <Image src={bot3} alt="logo-bot" width={90} height={90} />
                <Link className="px-3 py-2 rounded-md md:text-lg text-clr-7 hover:text-clr-5 bg-clr-4 hover:bg-clr-6 trans font-medium tracking-wider mt-2"
                href="http://t.me/devbidden" target="_blank">
                    Contact Developer
                </Link>
            </div>
        </nav>
    )
}

export default Nav