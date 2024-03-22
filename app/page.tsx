'use client'
import Footer from "./components/footer";
import Header from "./components/header";

import { Albert_Sans } from "next/font/google";
const albert = Albert_Sans({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
    <Header />
    <main className={`${albert.className} flex min-h-screen flex-col items-center justify-between p-24`}>
      
      <section className="flex flex-col items-center justify-center h-96 w-full rounded-xl shadow-lg">
        <h2 className="text-8xl">With&nbsp;
        <span className="bg-gradient-to-r from-red-400 to-indigo-400 inline-block text-transparent bg-clip-text hover:underline"> myFocus</span>, stay on &nbsp;
        <span className="text-red-400">track</span>, stay&nbsp;
        <span className="text-red-400">updated</span>, and get your work done&nbsp;
        <span className="text-red-400">on time.</span></h2>
        <button className="bg-gradient-to-r from-red-400 to-indigo-400 text-white text-2xl p-4 rounded-lg mt-8">Get Started Now</button>
      </section>
    </main>
    <Footer />
    </>
  );
}
