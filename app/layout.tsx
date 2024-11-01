import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "NASA's Astronomy Highlights By Anish Dangol",
  description: "This project is a Next.js application created to demonstrate a simple web application setup using TypeScript and Tailwind CSS by fetching NASA's APOD API. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background_color h-[100vh] w-[100vw]`}
      >
        <main className="h-full w-full flex flex-col relative">
          <section className="z-10 flex items-center justify-center h-full w-full relative ">
            {children}
            </section>
        </main>
      </body>
    </html>
  );
}
