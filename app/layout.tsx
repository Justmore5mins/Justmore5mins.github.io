import type { Metadata } from "next";
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Justmore5mins | 游錐",
  description: "Justmore5mins' website",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-tw" className={cn("m-w-screen overflow-x-hidden", "font-sans", geist.variable)}>
      <body className="bg-[#0e1116] text-white">{children}</body>
    </html>
  );
}
