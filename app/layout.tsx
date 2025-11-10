import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import Script from "next/script";
import MinimalMigrationNotice from "./components/minimal-migration-notice";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Home | Irfan Nuha.",
  description: "Irfan Noah Personal Portfolio Web Using Next",
  generator: "Next.js",
  applicationName: "Portfolio",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "React", "JavaScript"],
  authors: [
    { name: "Irfan" },
    { name: "Noah", url: "https://irfannuha.vercel.app" },
  ],
  creator: "Irfan(davinci)",
  publisher: "Irfan nuha",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-5457NX2TT9"
      />
      <Script id="google-analytics">
        {`
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', 'G-5457NX2TT9');
				`}
      </Script>
      <html lang="en" className="scroll-smooth">
        <body className={inter.className}>
          <MinimalMigrationNotice />
          <Navbar />
          <div className="mb-0 2xl:mb-28">
            <div className="flex flex-col 2xl:flex-row">
              <div className="w-full 2xl:w-1/3 order-2 2xl:order-1">
                <Footer />
              </div>
              <div className="w-full 2xl:w-2/3 order-1 2xl:order-2">
                {children}
              </div>
            </div>
          </div>
        </body>
      </html>
    </>
  );
}
