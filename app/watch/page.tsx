"use client";

import { useEffect, useState } from "react";

const heroVideos = [
  {
    title: "Sample Title",
    description: "PalmyrasTV Description",
    image:
      "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=1600",
  },
  {
    title: "Sample Title",
    description: "PalmyrasTV Description",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600",
  },
  {
    title: "Sample Title",
    description: "PalmyrasTV Description",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1600",
  },
  {
    title: "Sample Title",
    description: "PalmyrasTV Description",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1600",
  },
  {
    title: "Sample Title",
    description: "PalmyrasTV Description",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1600",
  },
];

export default function WatchPage() {

const [currentHero, setCurrentHero] = useState(0);

useEffect(() => {
  const timer = setInterval(() => {
    setCurrentHero((prev) => (prev + 1) % heroVideos.length);
  }, 8000);

  return () => clearInterval(timer);
}, []);

return (
<main className="bg-black text-white min-h-screen">

<section className="relative h-[70vh] md:h-[85vh] overflow-hidden">

  <img
    src={heroVideos[currentHero].image}
    alt=""
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />

  <div className="relative z-10 h-full flex items-center">

    <div className="px-6 md:px-16 max-w-3xl">

      <span className="bg-red-600 px-3 py-1 rounded-full text-sm">
        Featured
      </span>

      <h1 className="text-4xl md:text-7xl font-bold mt-4 mb-4">
        {heroVideos[currentHero].title}
      </h1>

      <p className="text-gray-300 text-lg mb-8">
        {heroVideos[currentHero].description}
      </p>

      <button className="bg-red-600 px-8 py-3 rounded-xl font-bold hover:bg-red-700">
        ▶ Watch Now
      </button>

    </div>

  </div>

</section>

<section className="px-4 md:px-8 py-10 space-y-14">

  <div>

<div className="flex justify-between items-center mb-5">
<h2 className="text-3xl font-bold">🔴 Live Now</h2>
<a href="#" className="text-red-500">More →</a>
</div>

<div className="flex gap-5 overflow-x-auto scrollbar-hide">

{[1,2,3,4,5,6].map((item)=>(
<div key={item} className="min-w-[300px]">

<img
src={`https://picsum.photos/500/300?random=${item}`}
className="rounded-xl"
/>

<h3 className="mt-3 font-semibold">
Sample Title
</h3>

<p className="text-gray-400 text-sm">
PalmyrasTV Description
</p>

</div>
))}

</div>

</div>
<div>

<div className="flex justify-between items-center mb-5">
<h2 className="text-3xl font-bold">⏳ Upcoming</h2>
<a href="#" className="text-red-500">More →</a>
</div>

<div className="flex gap-5 overflow-x-auto scrollbar-hide">

{[7,8,9,10,11,12].map((item)=>(
<div key={item} className="min-w-[300px]">

<img
src={`https://picsum.photos/500/300?random=${item}`}
className="rounded-xl"
/>

<h3 className="mt-3 font-semibold">
Sample Title
</h3>

<p className="text-gray-400 text-sm">
PalmyrasTV Description
</p>

</div>
))}

</div>

</div><div>

<div className="flex justify-between items-center mb-5">
<h2 className="text-3xl font-bold">🔥 Trending</h2>
<a href="#" className="text-red-500">More →</a>
</div>

<div className="flex gap-5 overflow-x-auto scrollbar-hide">

{[13,14,15,16,17,18].map((item)=>(
<div key={item} className="min-w-[300px]">

<img
src={`https://picsum.photos/500/300?random=${item}`}
className="rounded-xl"
/>

<h3 className="mt-3 font-semibold">
Sample Title
</h3>

<p className="text-gray-400 text-sm">
PalmyrasTV Description
</p>

</div>
))}

</div>

</div>
<div>

<div className="flex justify-between items-center mb-5">
<h2 className="text-3xl font-bold">
🎥 PalmyrasTV Exclusive
</h2>
<a href="#" className="text-red-500">More →</a>
</div>

<div className="flex gap-5 overflow-x-auto scrollbar-hide">

{[1,2,3,4,5,6].map((item)=>(
<div key={item} className="min-w-[320px]">

<video
controls
poster={`/thumbnails/palmyra${item}.jpg`}
className="rounded-xl w-full"
>
<source
src={`/videos/palmyra${item}.mp4`}
type="video/mp4"
/>
</video>

<h3 className="mt-3 font-semibold">
Sample Title
</h3>

<p className="text-gray-400 text-sm">
PalmyrasTV Description
</p>

</div>
))}

</div>

</div>
<div>

<div className="flex justify-between items-center mb-5">
<h2 className="text-3xl font-bold">
🔴 RedlandFC
</h2>
<a href="#" className="text-red-500">More →</a>
</div>

<div className="flex gap-5 overflow-x-auto scrollbar-hide">

{[1,2,3,4,5,6].map((item)=>(
<div key={item} className="min-w-[320px]">

<video
controls
poster={`/thumbnails/redland${item}.jpg`}
className="rounded-xl w-full"
>
<source
src={`/videos/redland${item}.mp4`}
type="video/mp4"
/>
</video>

<h3 className="mt-3 font-semibold">
Sample Title
</h3>

<p className="text-gray-400 text-sm">
PalmyrasTV Description
</p>

</div>
))}

</div>

</div>

</section>

    {/* Footer */}
<footer className="bg-zinc-950 border-t border-zinc-800 px-8 py-12 mt-10 pb-24">

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
    © 2026 - PalmyrasTV by Assist Network • All Rights Reserved
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