import type { Metadata } from "next";
import "./globals.css";
// import "./font-dm-sans.css";
// import localFont from "next/font/local";

// const dmSans = localFont({
//   src: "/fonts/DM-Sans/DMSans-Regular.ttf",
//   display: "swap",
//   variable: "--font-dmsans",
// });

// const waiter = localFont({
//   src: "/fonts/WaitingfortheSunrise-Regular.ttf",
//   display: "swap",
//   variable: "--font-main",
// });

export const metadata: Metadata = {
  title: "Samson lawal | Portfolio",
  description:
    "Welcome to my portfolio website! Explore my projects, skills, and experiences. Let's connect and create something amazing together!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
