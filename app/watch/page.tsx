"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { videos } from "@/lib/videos";

export default function Home() {


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

  <Link href={`/watch/${videos[currentVideo].id}`}>
<img
src={
  videos[currentVideo].type === "youtube"
  ?
  `https://img.youtube.com/vi/${videos[currentVideo].id}/hqdefault.jpg`
  :
  videos[currentVideo].thumbnail
}
className="absolute inset-0 w-full h-full object-cover"
alt={videos[currentVideo].title}
/>
</Link>

  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

  <div className="relative z-10 h-full flex items-center px-6 md:px-16">

    <div>

      <h1 className="text-5xl md:text-7xl font-bold mb-5">
       {videos[currentVideo].title}
     </h1>

      <p className="text-gray-300 max-w-xl mb-8">
      {videos[currentVideo].description}
    </p>

      <Link
        href={`/watch/${videos[currentVideo].id}`}
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

{videos.map((video)=>(
<Link
key={video.id}
href={`/watch/${video.id}`}
className="w-[300px] flex-shrink-0"
>

<img
src={
 video.type === "youtube"
 ?
 `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`
 :
 video.thumbnail
}
className="rounded-xl"
alt={video.title}
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

{videos.map((video)=>(

<Link
key={video.id}
href={`/watch/${video.id}`}
className="w-[300px] flex-shrink-0"
>

<img
src={
 video.type === "youtube"
 ?
 `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`
 :
 video.thumbnail
}
className="rounded-xl w-full"
alt={video.title}
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

{videos.map((video)=>(

<Link
key={video.id}
href={`/watch/${video.id}`}
className="w-[300px] flex-shrink-0"
>

<img
src={
 video.type === "youtube"
 ?
 `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`
 :
 video.thumbnail
}
className="rounded-xl w-full"
alt={video.title}
/>

</Link>

))}

</div>

   </section>


    </main>
  );
}