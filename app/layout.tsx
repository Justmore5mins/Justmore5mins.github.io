import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Justmore5mins | 游錐",
  description: "Justmore5mins' website",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-tw">
      <body>{children}</body>
    </html>
  );
}
