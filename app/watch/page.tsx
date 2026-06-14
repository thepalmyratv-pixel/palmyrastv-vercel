export default function WatchPage() {
  return (
    <main className="bg-black min-h-screen text-white p-6">

      <h1 className="text-4xl font-bold mb-6">
        ▶ Watch
      </h1>

      <div className="aspect-video w-full">
        <iframe
          className="w-full h-full rounded-xl"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          title="Video Player"
          allowFullScreen
        />
      </div>

    </main>
  );
}