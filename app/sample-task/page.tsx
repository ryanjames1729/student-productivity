'use client'
import Footer from "../components/footer";
import Header from "../components/header";
import Tasks from "../components/tasks";

import { useState } from "react";

export default function sampleTask() {
  return (
    <>
    <Header />
    <main className="flex min-h-screen flex-col items-center justify-start p-24 w-full">
      <Tasks />
    </main>
    <Footer />
    </>
  );
}
