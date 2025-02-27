import { NEXT_PUBLIC_URL } from "./../../config";

export async function GET() {
  const appUrl = NEXT_PUBLIC_URL;

  const config = {
    accountAssociation: {
      header:
        "eyJmaWQiOjQ1NTczMiwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDJGMDY4MkFjNEU2YWNDRTYwOEM0NGNCN0Y0NzQwNTAwYjg1RDhhN0UifQ",
      payload:
        "eyJkb21haW4iOiJmYXJjYXN0ZXItZnJhbWVzLXRlc3QtdGFuLnZlcmNlbC5hcHAifQ",
      signature:
        "MHgwMDJhZmRkNmUyNWRkNzU3NWZlNTBmODNlOTFkODRmYTMzNzg5NzI2YWQ4NGRiMTdhMzY1NjVlODFkOGRjNmU4M2Y0NjM0MGUzM2EyZWU3NjhlNjBhOGIyMzU2ODU5ZDU4YzU3ODY2MzI5Nzg1YTliMGQ0MTkwNzBkNTA2NTUxMDFi",
    },
    frame: {
      version: "0.0.0",
      name: "Simple frames Demo",
      iconUrl: `${appUrl}/image.png`,
      splashImageUrl: `${appUrl}/hi.png`,
      splashBackgroundColor: "#000000",
      homeUrl: appUrl,
    },
  };

  return Response.json(config);
}


