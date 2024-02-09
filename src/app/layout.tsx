import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider/theme-provider";
import { QueryProvider } from "@/components/query-provider/query-provider";
import TopNavbar from "@/components/navigation/top-navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Botty",
  description: "Descendant of CHATGPT?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main className="w-screen h-screen relative">
              <TopNavbar />
              {children}
            </main>
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
