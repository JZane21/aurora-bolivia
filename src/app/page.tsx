"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-[#2a2a5d]">
      <div className="w-full flex flex-col items-center justify-between p-24 ">
      <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-[#42457A] mb-6">
          Aurora Bolivia
        </h1>
        <div className="text-lg mb-4">
          <h2 className="font-bold mb-2">Integrantes:</h2>
          <ul className="text-slate-800 list-disc px-5">
            <li>Natalia Bilbao</li>
            <li>José Carrasco</li>
            <li>Ander Cayllan</li>
            <li>Ignacio Lizarazu</li>
            <li>Emanuel Lozano</li>
            <li>Ambar Rojas</li>
          </ul>
        </div>
      </div>
    </div>
    </main>
  )
}
