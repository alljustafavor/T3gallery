import Link from "next/link";

const mockURLs = [
  "https://utfs.io/f/78f139b8-8493-4d9b-91dd-55b8b9ffb063-k68nml.jpg",
  "https://utfs.io/f/a10b2c5d-117d-4945-81ff-cc935b14f213-4fgb62.jpg",
  "https://utfs.io/f/c13aa6f1-ca0b-48fc-981a-7ccb5f412a53-farjd2.jpg",
  "https://utfs.io/f/443117e3-4ea2-4b11-adc8-3e25b0e3601f-jlo1ag.jpeg"
];

const mockImages = mockURLs.map((url, index) => ({
  id: index + 1,
  url,
}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div> 
        ))}
      </div>
    </main>
  );
}
