// {
//     "accountAssociation": {
//       "header": "eyJmaWQiOjQ1NTczMiwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDJGMDY4MkFjNEU2YWNDRTYwOEM0NGNCN0Y0NzQwNTAwYjg1RDhhN0UifQ",
//       "payload": "eyJkb21haW4iOiJmYXJjYXN0ZXItZnJhbWVzLXRlc3QtdGFuLnZlcmNlbC5hcHAifQ",
//       "signature": "MHgwMDJhZmRkNmUyNWRkNzU3NWZlNTBmODNlOTFkODRmYTMzNzg5NzI2YWQ4NGRiMTdhMzY1NjVlODFkOGRjNmU4M2Y0NjM0MGUzM2EyZWU3NjhlNjBhOGIyMzU2ODU5ZDU4YzU3ODY2MzI5Nzg1YTliMGQ0MTkwNzBkNTA2NTUxMDFi"
//     },
//     "frame": {
//       "version": "1",
//       "name": "Example Frame",
//       "iconUrl": "https://farcaster-frames-test-tan.vercel.app/image.png",
//       "homeUrl": "https://farcaster-frames-test-tan.vercel.app",
//       "imageUrl": "https://farcaster-frames-test-tan.vercel.app/image.png",
//       "buttonTitle": "Check this out",
//       "splashImageUrl": "https://farcaster-frames-test-tan.vercel.app/image.png",
//       "splashBackgroundColor": "#eeccff"
//     }
//   }

export default function GET (){
    const appUrl = 'https://farcaster-frames-test-tan.vercel.app'

    const config = {
        "accountAssociation": {
          "header": "eyJmaWQiOjQ1NTczMiwidHlwZSI6ImN1c3RvZHkiLCJrZXkiOiIweDJGMDY4MkFjNEU2YWNDRTYwOEM0NGNCN0Y0NzQwNTAwYjg1RDhhN0UifQ",
          "payload": "eyJkb21haW4iOiJmYXJjYXN0ZXItZnJhbWVzLXRlc3QtdGFuLnZlcmNlbC5hcHAifQ",
          "signature": "MHgwMDJhZmRkNmUyNWRkNzU3NWZlNTBmODNlOTFkODRmYTMzNzg5NzI2YWQ4NGRiMTdhMzY1NjVlODFkOGRjNmU4M2Y0NjM0MGUzM2EyZWU3NjhlNjBhOGIyMzU2ODU5ZDU4YzU3ODY2MzI5Nzg1YTliMGQ0MTkwNzBkNTA2NTUxMDFi"
        },
        "frame": {
          "version": "1",
          "name": "Example Frame",
          "iconUrl": "https://farcaster-frames-test-tan.vercel.app/image.png",
          "homeUrl": "https://farcaster-frames-test-tan.vercel.app",
          "imageUrl": "https://farcaster-frames-test-tan.vercel.app/image.png",
          "buttonTitle": "Check this out",
          "splashImageUrl": "https://farcaster-frames-test-tan.vercel.app/image.png",
          "splashBackgroundColor": "#eeccff"
        }
      }
}