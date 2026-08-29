import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kitchapp",
  description:
    "Kitchen inventory, waste, organization, shopping, and meal planning.",
  version: "1.0.0" as string,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
