import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/app/providers";
import { NEXT_PUBLIC_URL } from "./config";



// const frame = {
//   version: "next",
//   imageUrl: `${NEXT_PUBLIC_URL}/image.png`,
//   button: {
//     title: "Launch frame",
//     action: {
//       type: "launch_frame",
//       name: "test frame ",
//       url: NEXT_PUBLIC_URL,
//       splashImageUrl: `${NEXT_PUBLIC_URL}/splash.png`,
//       splashBackgroundColor: "#ffffff",
//     },
//   },
// };

export const metadata: Metadata = {
  title: "Farcaster Frames v2 Demo",
  description: "A Farcaster Frames v2 demo app",
  // openGraph: {
  //   title: "frames demo",
  //   description: "A simple frames demo by essien",
  // },
  // other: {
  //   "fc:frame": JSON.stringify(frame),
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
