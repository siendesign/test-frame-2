import { NEXT_PUBLIC_URL } from "./../../config";

export async function GET() {
  const appUrl = NEXT_PUBLIC_URL;

  const config = {
    accountAssociation: {
      header:
        "eyJmaWQiOjQ1NTczMiwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDJGMDY4MkFjNEU2YWNDRTYwOEM0NGNCN0Y0NzQwNTAwYjg1RDhhN0UifQ",
      payload: "eyJkb21haW4iOiJjZjc0LTEwMi04OC0xMTEtNTMubmdyb2stZnJlZS5hcHAifQ",
      signature:
        "MHgxMTcwMmNkODUxZjAzNmMxZmNkMjExNGQ2ZGM3MjIwNzViMDkwZjQ4Njc1MTllZDVhNjY3YzM2MGVhNTg4Mzk0NTI5NTYzZDE3NjM3YjdiNmFiNWUyZTI2YjIzOTkyYjA0YzFkYjIxZjk2OTk5ZmU3Yjc3ZDIzNjE4MGUyN2Y1MTFj",
    },
    frame: {
      version: "1",
      name: "Example Frame",
      iconUrl: "https://cf74-102-88-111-53.ngrok-free.app/icon.png",
      homeUrl: "https://cf74-102-88-111-53.ngrok-free.app",
      imageUrl: "https://cf74-102-88-111-53.ngrok-free.app/image.png",
      buttonTitle: "Check this out",
      splashImageUrl: "https://cf74-102-88-111-53.ngrok-free.app/splash.png",
      splashBackgroundColor: "#eeccff",
    },
  };

  return Response.json(config);
}
