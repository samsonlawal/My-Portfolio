import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
// import SmoothScroll from "@/providers/smoothScroll";
import { AppThemeProvider } from "@/providers/theme-provider";
// import { HeroProvider } from "@/providers/heroUI";

// export const metadata: Metadata = {
//   title: "Samson Lawal | Portfolio",
//   description:
//     "Welcome to my portfolio website! Explore my projects, skills, and experiences. Let's connect and create something amazing together!",
//   icons: {
//     // Reference your image file in the public directory
//     icon: "/icon.jpg",
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Samson Lawal — Software Engineer</title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@samsondejs" />
        <meta name="twitter:title" content="Samson Lawal — Software Engineer" />
        <meta
          name="twitter:description"
          content="I’m a software engineer with a knack for problem-solving and a strong CS background. I build clean, scalable web applications and elegant solutions."
        />
        <meta
          name="twitter:image"
          content="https://samsonlawal.vercel.app/icons/icon.jpg"
        />
        <meta name="twitter:image:alt" content="samson's image" />

        {/* Open Graph metadata for link previews */}
        {/* <meta property="og:title" content="Samson Lawal — Software Engineer" />
        <meta
          property="og:description"
          content="I’m a software engineer with a knack for problem-solving and a strong CS background. I build clean, scalable web applications and elegant solutions."
        />
        <meta
          property="og:image"
          content="https://samsonlawal.vercel.app/icons/icon.jpg"
        />
        <meta property="og:url" content="https://samsonlawal.vercel.app" />
        <meta property="og:type" content="website" /> */}

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YME5XHC5XG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YME5XHC5XG');
          `}
        </Script>
      </head>
      <body className="antialiased">
        {/* <SmoothScroll /> */}
        {/* <HeroProvider> */}
        <AppThemeProvider>{children}</AppThemeProvider>
        <Analytics />
        {/* </HeroProvider> */}
      </body>
    </html>
  );
}
