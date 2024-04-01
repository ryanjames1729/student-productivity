import { MuseoModerno } from "next/font/google";
import Link from "next/link";
const moderno = MuseoModerno({ subsets: ['latin'] })

export default function Header() {

    return (
        <header className="flex justify-center items-center h-24 bg-gray-100 text-slate-800 w-full pb-3">
            <h1 className={`text-6xl lg:text-8xl ${moderno.className}`}><Link href="/">myFocus</Link></h1>
        </header>
    )
}