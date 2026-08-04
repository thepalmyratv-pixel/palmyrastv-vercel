"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const heroVideos = [
  {
  id: "etdqh4E5QI8",
  title: "12 Objects You Can Never Touch",
  description: "The World's Most Protected Treasures",
  thumbnail:
"https://img.youtube.com/vi/etdqh4E5QI8/hqdefault.jpg",
  },
  {
    id: "PTVIntro",
    type: "local",
    title: "This is PalmyrasTV",
    video: "/videos/PTVIntro.mp4",
    thumbnail: "/thumbnails/PTVIntro.jpg",
  },
];

const trendingVideos = [
  {
  id: "etdqh4E5QI8",
  title: "Best Saves",
  description: "FIFA World Cup",
  thumbnail: "https://img.youtube.com/vi/etdqh4E5QI8/hqdefault.jpg",
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
    <Link href="#" className="text-red-500">
      More →
    </Link>
  </div>

  <div className="flex gap-5 overflow-x-auto scrollbar-hide">

    {trendingVideos.map((video) => (

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


</section>


  </main>
  );
}