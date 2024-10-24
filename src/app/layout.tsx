import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Sidebar } from "@/components/sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // <html lang="ja" className="dark">
    <html lang="ja" className="">
      <body className={inter.className}>
        <div className="flex">
          <Sidebar />
          <main className="mx-5 mt-16 sm:mt-3">{children}</main>
        </div>
      </body>
    </html>
  )
}
