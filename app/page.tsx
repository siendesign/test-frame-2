import dynamic from "next/dynamic";
import { Metadata } from "next";
import { NEXT_PUBLIC_URL } from "./config";
import Demo from "@/components/Demo";

// const appUrl = "https://farcaster-frames-test-tan.vercel.app";

const frameMetadata = {
  'fc:frame': 'vNext',
  'fc:frame:image': `${NEXT_PUBLIC_URL}/image.png`,
  'fc:frame:image:aspect_ratio': '3:2',
  // 'fc:frame:button:1': 'Connect Wallet',
  'fc:frame:post_url': `${NEXT_PUBLIC_URL}`,
};

// export const metadata: Metadata = {
//   metadataBase: new URL(NEXT_PUBLIC_URL),
//   title: 'My Farcaster Frame',
//   description: 'A simple Farcaster Frame',
//   openGraph: {
//     title: 'My Farcaster Frame',
//     description: 'A simple Farcaster Frame',
//     images: [`${NEXT_PUBLIC_URL}/splash.png`],
//   },
//   other: {
//     ...frameMetadata,
//   },
// };

// const frame = {
//   version: "next",
//   imageUrl: `${NEXT_PUBLIC_URL}/image.png`,
//   button: {
//     title: "Start App",
//     action: {
//       type: "launch_frame",
//       name: "Sien frame ",
//       url: NEXT_PUBLIC_URL,
//       iconImagUrl: `${NEXT_PUBLIC_URL}/image.png`,
//       splashImageUrl: `https://cf74-102-88-111-53.ngrok-free.app/splash.png`,
//       splashBackgroundColor: "#000000",
//     },
//   },
// };

// const validate = 300;
// @ts-ignore
// export const validate = 300;
export const revalidate = false | 0 | number


// export async function generateMetadata(): Promise<Metadata> {
//   return {
//     title: "frames demo",
//     openGraph: {
//       title: "frames demo",
//       description: "A simple frames demo by essien",
//     },
//     other: {
//       "fc:frame": JSON.stringify(frame),
//     },
//   };
// }

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col p-4">
      <Demo />
    </main>
  );
}
