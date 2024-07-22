'use client'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { sidebarLinks } from "@/constants"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const Mobilenav = ({ user }: MobileNavProps) => {
    const pathname = usePathname()
    return (
        <section>
            <Sheet>
                <SheetTrigger>
                    <Image
                        src="/icons/hamburger.svg"
                        width={30}
                        height={30}
                        alt="menu"
                        className="cursor-pointer"
                    />
                </SheetTrigger>
                <SheetContent side="left" className="bg-white border-none">
                    <SheetClose asChild>
                        <nav className="flex flex-col gap-4">
                            <Link href="/" className="mb-6 cursor-pointer flex items-center gap-2">
                                <Image
                                    src="/icons/logo.svg"
                                    width={34}
                                    height={34}
                                    alt="Horizon logo"
                                />
                                <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">MeroBank</h1>
                            </Link>


                            {sidebarLinks.map(link => {
                                const isActive = pathname === link.route || pathname.startsWith(`${link.route}/`)
                                return (
                                    <SheetClose asChild>
                                        <Link href={link.route} key={link.label}
                                            className={cn('mobilenav-sheet_close w-full', { 'bg-bank-gradient': isActive })}
                                        >
                                            <div className="relative size-6">
                                                <Image
                                                    src={link.imgURL}
                                                    alt={link.label}
                                                    fill
                                                    className={cn({
                                                        'brightness-[3] invert-0': isActive
                                                    })}
                                                />
                                            </div>
                                            <p className={cn("text-20 font-semibold text-black-2", { "text-white": isActive })}>
                                                {link.label}
                                            </p>
                                        </Link>
                                    </SheetClose>
                                )
                            })}
                        </nav>
                    </SheetClose>
                </SheetContent>
            </Sheet>

        </section>
    )
}

export default Mobilenav