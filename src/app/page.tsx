import { SignedIn, SignedOut } from "@clerk/nextjs";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {

  async function Images() {
    const images = await db.query.images.findMany({
      orderBy:(model, { desc }) => desc(model.id),
    });

    return (
      <div className="flex flex-wrap gap-4">
      {[...images].map((image) => (
        <div key={image.id} className="w-48">
          <img src={image.url} alt="image" />
          <div>{image.name}</div>
        </div> 
      ))}
    </div>
    );
  }

  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-2x1 text-center">Please sign in above</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
