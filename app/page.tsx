"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {

  const videos = [
    "gVPQtn-EmU4",
    "ubEd0UwJbbg",
    "0fmqqLJiDzI",
  ];

  const [currentVideo, setCurrentVideo] = useState(0);

  // 👇 Paste here
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {

    const timer = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 10000);

    return () => clearInterval(timer);
  }, []);
  return (
    <main className="bg-black min-h-screen text-white pb-24">



{/* Top Navbar */}

<header className="sticky top-0 z-50 flex items-center justify-between px-4 md:px-8 py-4 bg-black/90 backdrop-blur border-b border-zinc-800">

  <div className="flex items-center gap-4">

    <button
      onClick={() => setMenuOpen(true)}
      className="text-3xl hover:text-red-500"
    >
      ☰
    </button>

    <img
      src="/logo.png"
      alt="PalmyrasTV"
      className="w-10 h-10"
    />

    <h1 className="text-2xl md:text-3xl font-bold text-red-600">
      PalmyrasTV
    </h1>

  </div>

  <div className="relative">

    <input
    type="text"
    placeholder="Search videos..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="bg-zinc-900 border border-zinc-700 rounded-full px-10 py-2 w-56 md:w-72 focus:outline-none focus:border-red-600"
    />

    <span className="absolute left-3 top-2.5 text-gray-400">
      🔍
    </span>

  </div>

</header>



{menuOpen && (
  <>
    <div
      className="fixed inset-0 bg-black/60 z-40"
      onClick={() => setMenuOpen(false)}
    />

    <aside className="fixed left-0 top-0 h-full w-72 bg-zinc-950 z-50 p-6">

      <button
        onClick={() => setMenuOpen(false)}
        className="text-3xl mb-8"
      >
        ✕
      </button>

      <nav className="flex flex-col gap-5">

        <Link href="/">🏠 Home</Link>
        <Link href="/watch">▶ Watch</Link>
        <Link href="/store">🛍 Store</Link>
        <Link href="/profile">👤 Profile</Link>
        <Link href="/about">ℹ About</Link>
        <Link href="/privacy">🔒 Privacy</Link>

      </nav>

    </aside>
  </>
)}

<section className="relative h-[65vh] md:h-[85vh] overflow-hidden">

  <img
    src={`https://img.youtube.com/vi/${videos[currentVideo]}/maxresdefault.jpg`}
    className="absolute inset-0 w-full h-full object-cover"
    alt=""
  />

  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

  <div className="relative z-10 h-full flex items-center px-6 md:px-16">

    <div>

      <h1 className="text-5xl md:text-7xl font-bold mb-5">
        Featured Video
      </h1>

      <p className="text-gray-300 max-w-xl mb-8">
        Watch the latest football highlights, entertainment and PalmyrasTV exclusives.
      </p>

      <Link
        href={`/watch/${videos[currentVideo]}`}
        className="bg-red-600 px-8 py-4 rounded-xl font-bold hover:bg-red-700"
      >
        ▶ Watch Now
      </Link>

    </div>

  </div>

</section>



<section className="px-6 md:px-10 py-10">

<h2 className="text-3xl font-bold mb-5">
 Trending
</h2>

<div className="flex gap-5 overflow-x-auto">

{videos.map((id)=>(
<Link
key={id}
href={`/watch/${id}`}
className="w-[300px] flex-shrink-0"
>

<img
src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`}
className="rounded-xl"
/>

</Link>
))}

</div>

</section>


<section className="px-6 md:px-10 py-10">

<h2 className="text-3xl font-bold mb-5">
 Live TV
</h2>

<Link href="/watch/live">

<img
src="/livetv.jpg"
className="rounded-xl"
/>

</Link>

</section>



<section className="px-6 md:px-10 py-10">

<h2 className="text-3xl font-bold mb-5">
 Sports
</h2>

<div className="flex gap-5 overflow-x-auto">

{videos.map((id)=>(
<Link
key={id}
href={`/watch/${id}`}
className="w-[300px] flex-shrink-0"
>

<img
src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
className="rounded-xl"
/>

</Link>
))}

</div>

</section>




<section className="px-6 md:px-10 py-10">

<h2 className="text-3xl font-bold mb-5">
 Movies
</h2>

<div className="flex gap-5 overflow-x-auto">

{videos.map((id)=>(
<Link
key={id}
href={`/watch/${id}`}
className="w-[300px] flex-shrink-0"
>

<img
src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
className="rounded-xl"
/>

</Link>
))}

</div>

</section>





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
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/terms">Terms & Conditions</Link>
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

        <a href="/profile" className="flex flex-col items-center text-white">
          <span className="text-xl">👤</span>
          <span className="text-xs">Profile</span>
        </a>

      </div>

    </main>
  );
}