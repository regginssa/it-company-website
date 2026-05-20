import type { Metadata } from "next";
import "@/public/styles/style.scss";
import InitAnimations from "@/components/layout/InitAnimations";

export const metadata: Metadata = {
  title: "Charlie Unicorn AI | Software Development & IT Solutions",
  description:
    "Charlie Unicorn AI — Web development, mobile apps, blockchain, and Unreal Engine 5 game development.",
  keywords: [
    "Charlie Unicorn AI",
    "Web Development",
    "Mobile App Development",
    "Blockchain Development",
    "Unreal Engine 5",
    "Game Development",
    "IT Solutions",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <InitAnimations />
      </body>
    </html>
  );
}
