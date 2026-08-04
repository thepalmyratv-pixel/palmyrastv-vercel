"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {

  const videos = [
    "etdqh4E5QI8",
    "etdqh4E5QI8",
    "etdqh4E5QI8",
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




<section className="relative h-[65vh] md:h-[85vh] overflow-hidden">

  {videos.map((id, index) => (
  <Link
    key={index}
    href={`/watch/${id}`}
    className="w-[300px] flex-shrink-0"
  >
    <img
  src={`https://img.youtube.com/vi/${videos[currentVideo]}/hqdefault.jpg`}
  className="absolute inset-0 w-full h-full object-cover"
  alt="Featured video"
/>
  </Link>
))}

  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

  <div className="relative z-10 h-full flex items-center px-6 md:px-16">

    <div>

      <h1 className="text-5xl md:text-7xl font-bold mb-5">
        The World's Most Protected Treasures
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
src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
className="rounded-xl"
/>

</Link>
))}

</div>

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


    </main>
  );
}