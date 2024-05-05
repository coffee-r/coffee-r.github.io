import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "こーひーあーる",
  description: "こーひーあーる ポートフォリオサイト",
  openGraph: {
    type: "website",
    url: "https://coffee-r.github.io",
    title: "こーひーあーる",
    description: "こーひーあーる ポートフォリオサイト",
    images: "https://coffee-r.github.io/avator.jpeg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
