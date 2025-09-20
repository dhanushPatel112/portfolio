import { Html, Head, Main, NextScript } from "next/document"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" />
      </Head>
      <body>
        <SpeedInsights/>
        <Analytics />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
