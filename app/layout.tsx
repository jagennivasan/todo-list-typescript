import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AddItem from "@/components/AddItem/Additem";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "To-Do List",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <div>
       <AddItem/>
        {children}
       </div>
      
        </body>
    </html>
  );
}
