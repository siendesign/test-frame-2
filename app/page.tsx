import dynamic from "next/dynamic";
import { Metadata } from "next";
import { NEXT_PUBLIC_URL } from "./config";
import Demo from "@/components/Demo";


const appUrl = "https://farcaster-frames-test-tan.vercel.app";

const frameMetadata = {
  'fc:frame': 'vNext',
  'fc:frame:image': `${NEXT_PUBLIC_URL}/hi.png`,
  'fc:frame:image:aspect_ratio': '1:1',
  'fc:frame:button:1': 'Connect Wallet',
  'fc:frame:post_url': `${NEXT_PUBLIC_URL}`,
};

export const metadata: Metadata = {
  metadataBase: new URL(NEXT_PUBLIC_URL),
  title: 'My Farcaster Frame',
  description: 'A simple Farcaster Frame',
  openGraph: {
    title: 'My Farcaster Frame',
    description: 'A simple Farcaster Frame',
    images: [`${NEXT_PUBLIC_URL}/hi.png`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col p-4">
      <Demo />
    </main>
  );
}
