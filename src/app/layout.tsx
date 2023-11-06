import { cn } from "@/lib/utils"
import "./globals.css"
import { Inter as FontSans } from "next/font/google"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PropsWithChildren } from "react"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ul className="flex gap-4 border-b border-gray-400 p-4">
          <li>
            <Link href="/">
              Homepage Title
              </Link>
          </li>
          <li>
          <Link href="/about">
              About
              </Link>
          </li>
        </ul>
       {children}
      </body>
    </html>
  )
}
