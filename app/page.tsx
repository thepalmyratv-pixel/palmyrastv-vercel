"use client";

import { useEffect, useState } from "react";

export default function Home() {
    const videos = [
    "gVPQtn-EmU4",
    "ubEd0UwJbbg",
    "0fmqqLJiDzI",
  ];

  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {

    const timer = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);
  return (
    <main className="bg-black min-h-screen text-white pb-24">

{/* Top Navbar */}

<header className="flex items-center gap-3 px-6 py-4 bg-black border-b border-zinc-800">

  <img
    src="/logo.png"
    alt="PalmyrasTV"
    className="h-12 w-12"
  />

  <h1 className="text-3xl font-bold text-red-600">
    PalmyrasTV
  </h1>

</header>


    {/* Footer */}
<footer className="bg-zinc-950 border-t border-zinc-800 px-8 py-12 mt-10">

  <div className="grid md:grid-cols-3 gap-10">

    <div>
      <h3 className="text-2xl font-bold text-red-600 mb-3">
        PalmyrasTV
      </h3>

      <p className="text-gray-400">
        PalmyrasTV is a modern OTT streaming platform for
        entertainment, sports, movies and digital culture connect.
      </p>
    </div>

    <div>
      <h4 className="font-semibold mb-3">
        Quick Links
      </h4>

      <div className="flex flex-col gap-2 text-gray-400">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms & Conditions</a>
      </div>
    </div>

    <div>
      <h4 className="font-semibold mb-3">
        Follow Us
      </h4>

      <div className="flex flex-col gap-2 text-gray-400">
        <a href="#">YouTube</a>
        <a href="#">Instagram</a>
        <a href="#">Facebook</a>
        <a href="#">X / Twitter</a>
      </div>
    </div>

  </div>

  <div className="border-t border-zinc-800 mt-8 pt-6 text-center text-gray-500 text-sm">
    © 2026 - PalmyrasTV by Assist Network Ltd • All Rights Reserved
  </div>

</footer>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 w-full bg-black border-t border-gray-800 flex justify-around py-3 z-50">

        <a href="/" className="flex flex-col items-center text-white">
          <span className="text-xl">⌂</span>
          <span className="text-xs">Home</span>
        </a>

        <a href="/watch" className="flex flex-col items-center text-white">
          <span className="text-xl">▶</span>
          <span className="text-xs">Watch</span>
        </a>

        <a href="/store" className="flex flex-col items-center text-white">
          <span className="text-xl">▢</span>
          <span className="text-xs">Store</span>
        </a>

        <a href="/profile" className="flex flex-col items-center te1xt-white">
          <span className="text-xl">👤</span>
          <span className="text-xs">Profile</span>
        </a>

      </div>

    </main>
  );
}