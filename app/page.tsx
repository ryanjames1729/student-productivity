'use client'
import Footer from "./components/footer";
import Header from "./components/header";

import Image from 'next/image'
import Link from 'next/link'

import { Albert_Sans } from "next/font/google";
const albert = Albert_Sans({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
    <Header />
    <main className={`${albert.className} flex min-h-screen flex-col items-center justify-between lg:pt-24 pt-12`}>
      
      <section className="flex flex-col items-center justify-center h-screen w-full rounded-xl shadow-lg lg:px-24 px-12 lg:pb-24 pb-12">
        <h2 className="lg:text-8xl text-4xl">With&nbsp;
        <span className="bg-gradient-to-r from-red-400 to-indigo-400 inline-block text-transparent bg-clip-text hover:underline"> myFocus</span>, stay on &nbsp;
        <span className="text-red-400">track</span>, stay&nbsp;
        <span className="text-red-400">updated</span>, and get your work done&nbsp;
        <span className="text-red-400">on time.</span></h2>
        <button className="bg-gradient-to-r from-red-400 to-indigo-400 text-white text-2xl lg:p-4 p-2 rounded-lg mt-8 lg:w-1/4">Get Started Now</button>
        <Link href="/sample-task" className="w-full flex items-center justify-center">
        <button className="bg-red-400 hover:bg-indigo-400 text-white text-2xl lg:p-4 p-2 rounded-lg mt-4 lg:w-1/4">Try it Out!</button>
        </Link>
      </section>

      {/* Techer testiomonial */}
      <section className="flex lg:flex-row flex-col items-center justify-center h-screen w-full shadow-lg bg-red-400 lg:px-24 px-12 lg:pb-24 pb-12 pt-4">
      <div className="lg:min-h-96 lg:min-w-96 min-h-48 min-w-48 relative lg:p-4 p-2"> 
        <Image
          src="/teacher-testimonial.jpg"
          alt="Teacher testimonial image"
          layout="fill" // required
          objectFit="cover" // change to suit your needs
          className="rounded-full" // just an example
        />
      </div>
      <div className="w-full p-4">
        <h2 className="text-4xl">"I use myFocus to keep my students on track and organized. It's a great tool for teachers and students alike! Everyone should be using myFocus now."</h2>
        <h3 className="text-2xl">-Mrs. Smith, teacher at Carolina Day School</h3>
      </div>
      </section>

      {/* Student testimonial */}
      <section className="flex lg:flex-row flex-col items-center justify-center h-screen w-full shadow-lg bg-indigo-400 lg:px-24 px-12 lg:pb-24 pb-12">
      <div className="w-full p-4">
        <h2 className="text-4xl">"Until I used myFocus for my assignments and projects, I was constantly overwhelmed. With the help of my teachers and myFocus, I get everything turned in on time now."</h2>
        <h3 className="text-2xl">-J. Smith, student at Carolina Day School</h3>
      </div>
      <div className="lg:min-h-96 lg:min-w-96 min-h-48 min-w-48 relative lg:p-4 p-2"> 
        <Image
          src="/student-testimonial.jpg"
          alt="Student testimonial image"
          layout="fill" // required
          objectFit="cover" // change to suit your needs
          className="rounded-full" // just an example
        />
      </div>
      </section>
    </main>
    <Footer />
    </>
  );
}
