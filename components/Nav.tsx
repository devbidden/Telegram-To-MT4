"use client"
import Link from "next/link"
import Image from "next/image"

const Nav: React.FC = () => {
    return (
        <nav className="nav-bar md:px-16 md:py-3">
            <div className="flex items-center justify-between mx-auto">
                <Image src="https://res.cloudinary.com/kawojue/image/upload/v1685891779/Signal%20Copier/bot-1_shk7k2.jpg" alt="logo-bot" width={80} height={80} />
                <Link className="px-3 py-2 rounded-md md:text-lg text-clr-7 hover:text-clr-5 bg-clr-4 hover:bg-clr-6 trans font-medium tracking-wider mt-2"
                href="http://t.me/devbidden" target="_blank">
                    Contact Developer
                </Link>
            </div>
        </nav>
    )
}

export default Nav