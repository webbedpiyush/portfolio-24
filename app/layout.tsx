import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AuroraBackground } from "@/components/ui/aurora-background";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Piyush's Portfolio",
  description: "created by webbedpiyush",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.className} antialiased`}>
        <AuroraBackground>
          <main className="flex flex-col p-5 relative z-10 min-h-screen">
            <div className="flex justify-center items-center mb-14">
              <Header />
            </div>
            <div className="flex justify-center items-center flex-1">
              {children}
            </div>
            <div className="mt-10">
              <Footer />
            </div>
          </main>
        </AuroraBackground>
      </body>
    </html>
  );
}
