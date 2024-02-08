"use client";
import SideBar from "@/components/navigation/sidebar";
import TopNavbar from "@/components/navigation/top-navbar";
import { Separator } from "@/components/ui/separator";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <section className="flex w-screen h-screen">
        <section className="hidden md:block md:w-[18%] h-full">
          <SideBar />
        </section>
        <section className="w-full md:w-[82%]">
          <TopNavbar />
          {children}
        </section>
      </section>
    </main>
  );
}
