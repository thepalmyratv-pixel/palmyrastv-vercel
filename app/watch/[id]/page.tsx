export default async function VideoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const isLocal = id.startsWith("PTV");

  return (
    <main className="bg-black min-h-screen flex justify-center items-center p-4">
      <div className="w-full max-w-7xl aspect-video">

        {isLocal ? (
          <video
            className="w-full h-full rounded-xl"
            src={`/videos/${id}.mp4`}
            controls
            autoPlay
          />
        ) : (
          <iframe
            className="w-full h-full rounded-xl"
            src={`https://www.youtube.com/embed/${id}?autoplay=1`}
            title="YouTube player"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}

      </div>
    </main>
  );
}