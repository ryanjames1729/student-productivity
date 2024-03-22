import { MuseoModerno } from "next/font/google";
const moderno = MuseoModerno({ subsets: ['latin'] })

export default function Header() {

    return (
        <header className="flex justify-center items-center h-24 bg-gray-100 text-slate-800">
            <h1 className={`text-6xl lg:text-8xl ${moderno.className}`}>myFocus</h1>
        </header>
    )
}