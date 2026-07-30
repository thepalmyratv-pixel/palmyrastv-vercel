"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const heroVideos = [
  {
  id: "yWR3P3qie50",
  title: "Best Saves",
  description: "FIFA World Cup",
  thumbnail:
"https://img.youtube.com/vi/yWR3P3qie50/maxresdefault.jpg",
  },
  {
    id: "yWR3P3qie50",
  title: "Best Goals",
  description: "FIFA World Cup",
  thumbnail:
"https://img.youtube.com/vi/yWR3P3qie50/maxresdefault.jpg",
  },
];

const trendingVideos = [
  {
  id: "yWR3P3qie50",
  title: "Best Saves",
  description: "FIFA World Cup",
  thumbnail: "https://img.youtube.com/vi/yWR3P3qie50/maxresdefault.jpg",
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
  src={heroVideos[currentHero].thumbnail}
  alt={heroVideos[currentHero].title}
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

      <Link
  href={`/watch/${heroVideos[currentHero].id}`}
  className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
>
  <span className="text-2xl">▶</span>
  <span>Watch Now</span>
</Link>

    </div>

  </div>
  </section>

<section className="px-4 md:px-8 py-10 space-y-14">

  <div>


  <div className="flex justify-between items-center mb-5">
    <h2 className="text-3xl font-bold">Trending</h2>
    <link href="#" className="text-red-500">
      More →
    </link>
  </div>

  <div className="flex gap-5 overflow-x-auto scrollbar-hide">

    {trendingVideos.map((video, index) => (

      <div key={video.id} className="w-[320px] flex-shrink-0">

  <Link href={`/watch/${video.id}`}>
    <img
      src={video.thumbnail}
      alt={video.title}
      className="w-full aspect-video rounded-xl object-cover hover:scale-105 transition duration-300 cursor-pointer"
    />
  </Link>

    <h3 className="mt-3 font-semibold">
      {video.title}
    </h3>

    <p className="text-gray-400 text-sm">
      {video.description}
    </p>

      </div>

    ))}

  </div>

</div>


<div className="flex justify-between items-center mb-5">
<h2 className="text-3xl font-bold">
🎥 PalmyrasTV Exclusive
</h2>
<link href="#" className="text-red-500">More →</link>
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
        <link href="/">Home</link>
        <link href="/about">About</link>
        <link href="/privacy">Privacy Policy</link>
        <link href="/terms">Terms & Conditions</link>
      </div>
    </div>

    <div>
      <h4 className="font-semibold mb-3">
        Follow Us
      </h4>

      <div className="flex flex-col gap-2 text-gray-400">
        <link href="#">YouTube</link>
        <link href="#">Instagram</link>
        <link href="#">Facebook</link>
        <link href="#">X / Twitter</link>
      </div>
    </div>

  </div>

  <div className="border-t border-zinc-800 mt-8 pt-6 text-center text-gray-500 text-sm">
    © 2026 - PalmyrasTV by Assist Network • All Rights Reserved
  </div>

</footer>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 w-full bg-black border-t border-gray-800 flex justify-around py-3 z-50">

        <link href="/" className="flex flex-col items-center text-white">
          <span className="text-xl">⌂</span>
          <span className="text-xs">Home</span>
        </link>

        <link href="/watch" className="flex flex-col items-center text-white">
          <span className="text-xl">▶</span>
          <span className="text-xs">Watch</span>
        </link>

        <link href="/store" className="flex flex-col items-center text-white">
          <span className="text-xl">▢</span>
          <span className="text-xs">Store</span>
        </link>

        <link href="/profile" className="flex flex-col items-center text-white">
          <span className="text-xl">👤</span>
          <span className="text-xs">Profile</span>
        </link>

      </div>

    </main>
  );
}