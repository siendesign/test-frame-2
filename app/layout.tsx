import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from '@/app/providers';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Farcaster Frames v2 Demo',
  description: 'A Farcaster Frames v2 demo app',
};


const appUrl = "https://farcaster-frames-test-tan.vercel.app";

const frame = {
  version: "next",
  imageUrl: `${appUrl}/image.png`,
  button: {
    title: "Lunch Frame",
    action: {
      type: "lunch_frame",
      name: "farcaster test app",
      url: appUrl,
      splashImageUrl: `${appUrl}/image.png`,
      splashBackgroundColor: "#000",
    },
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title:"test farcaster frame",
    openGraph:{
      title:"test farcaster frame",
      description:"test of farcaster frames"
    },
    other:{
      "fc:frame": JSON.stringify(frame)
    }
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>

      </body>
    </html>
  );
}
