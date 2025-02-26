'use client';
import dynamic from "next/dynamic";
import { Metadata } from "next";

const Demo = dynamic(() => import("@/components/Demo"), {
  ssr: false,
});

const appUrl = "https://farcaster-frames-test-tan.vercel.app";

// const frame = {
//   version: "next",
//   imageUrl: `${appUrl}/image.png`,
//   button: {
//     title: "Lunch Frame",
//     action: {
//       type: "lunch_frame",
//       name: "farcaster test app",
//       url: appUrl,
//       splashImageUrl: `${appUrl}/image.png`,
//       splashBackgroundColor: "#000",
//     },
//   },
// };

// export async function generateMetadata(): Promise<Metadata> {
//   return {
//     title:"test farcaster frame",
//     openGraph:{
//       title:"test farcaster frame",
//       description:"test of farcaster frames"
//     },
//     other:{
//       "fc:frame": JSON.stringify(frame)
//     }
//   };
// }

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col p-4">
      <Demo />
    </main>
  );
}
