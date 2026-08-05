"use client";


import Link from "next/link";
import { useEffect, useState } from "react";
import { videos } from "@/lib/videos";


export default function WatchPage(){


const [currentVideo,setCurrentVideo]=useState(0);



useEffect(()=>{


const timer=setInterval(()=>{

setCurrentVideo(
(prev)=>(prev+1)%videos.length
);

},8000);


return ()=>clearInterval(timer);


},[]);



function thumbnail(video:any){

return video.type==="youtube"
?
`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`
:
video.thumbnail;

}



return (

<main className="bg-black text-white min-h-screen">


<section className="relative h-[70vh] md:h-[85vh] overflow-hidden">


<img

src={thumbnail(videos[currentVideo])}

alt={videos[currentVideo].title}

className="absolute inset-0 w-full h-full object-cover"

/>



<div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"/>



<div className="relative z-10 h-full flex items-center">


<div className="px-6 md:px-16">


<h1 className="text-5xl md:text-7xl font-bold mb-5">

{videos[currentVideo].title}

</h1>


<p className="text-gray-300 text-lg mb-8">

{videos[currentVideo].description}

</p>


<Link

href={`/watch/${videos[currentVideo].id}`}

className="bg-red-600 px-8 py-4 rounded-xl font-bold"

>

▶ Watch Now

</Link>


</div>


</div>


</section>



<section className="px-6 py-10">


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

src={thumbnail(video)}

alt={video.title}

className="rounded-xl"

/>


<p className="mt-2">

{video.title}

</p>


</Link>


))}


</div>


</section>


</main>

);


}