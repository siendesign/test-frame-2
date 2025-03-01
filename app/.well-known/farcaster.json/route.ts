import { NEXT_PUBLIC_URL } from "./../../config";

export async function GET() {
  const appUrl = NEXT_PUBLIC_URL;

  const config = {
    accountAssociation: {
      header:
        "eyJmaWQiOjQ1NTczMiwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDJGMDY4MkFjNEU2YWNDRTYwOEM0NGNCN0Y0NzQwNTAwYjg1RDhhN0UifQ",
      payload:
        "eyJkb21haW4iOiI0MmZkLTJjMGYtZjVjMC00ODAtMWE0ZS0zNWVhLTNhNDktYTkyNi04NWM3Lm5ncm9rLWZyZWUuYXBwIn0",
      signature:
        "MHg3YmY4Mzk2MDk1NGI1Y2RlM2UyMTliN2QzYWNiMGFkMGFhN2Q3ZWMxOWNkN2RiZmQ0ZGI0ZWE5YmFhNWI0NjUxNmFmOGI4ZmUyNzU1ZmQ0MTAyMzUzZjlhMDA0NGQ5ZWMyMDkwZTlmNDE1NDQ4ODc5YjRhYTA3Y2I3NmEwNTY2OTFj",
    },
    frame: {
      version: "1",
      name: "Example Frame",
      iconUrl:
        "https://42fd-2c0f-f5c0-480-1a4e-35ea-3a49-a926-85c7.ngrok-free.app/icon.png",
      homeUrl:
        "https://42fd-2c0f-f5c0-480-1a4e-35ea-3a49-a926-85c7.ngrok-free.app",
      imageUrl:
        "https://42fd-2c0f-f5c0-480-1a4e-35ea-3a49-a926-85c7.ngrok-free.app/image.png",
      buttonTitle: "Check this out",
      splashImageUrl:
        "https://42fd-2c0f-f5c0-480-1a4e-35ea-3a49-a926-85c7.ngrok-free.app/splash.png",
      splashBackgroundColor: "#eeccff",
      webhookUrl:
        "https://42fd-2c0f-f5c0-480-1a4e-35ea-3a49-a926-85c7.ngrok-free.app/api/webhook",
    },
  };

  return Response.json(config);
}
