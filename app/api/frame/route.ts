import { NextRequest } from "next/server";
import { NEXT_PUBLIC_URL } from "@/app/config";

export async function POST(req: NextRequest) {
  const data = await req.json();
  console.log(data);

  const {} = data.untrustedData;

  if (data.isVerified) {
    return new Response(
      JSON.stringify({
        image: `${NEXT_PUBLIC_URL}/connected.png`,
        buttons: [{ label: "connected ☑️" }],
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  return new Response(
    `<!DOCTYPE html><html><head>
      <meta property="fc:frame" content="vNext" />
      <meta property="fc:frame:image" content="${NEXT_PUBLIC_URL}/hi.png" />
      <meta property="fc:frame:button:1" content="Connect Wallet" />
      <meta property="fc:frame:redirect" content="${NEXT_PUBLIC_URL}" />
    </head></html>`,
    {
      headers: {
        "Content-Type": "text/html",
      },
    }
  );
}
