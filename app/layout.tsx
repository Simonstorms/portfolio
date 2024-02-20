import type { Metadata } from 'next'
import '../styles/globals.css'
import {ThemeProvider} from "@/components/theme-provider";
import localFont from '@next/font/local'

export const metadata: Metadata = {
  title: 'Simon Gneuß - Freelance Software Engineer',
  description: 'Showcasing my work and my experience',
}


const archia = localFont({
  src: [
    {
      path: '../public/fonts/archia-regular-webfont.ttf',
      weight: '400'
    }
  ],
  variable: '--font-archia'
})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body  className={`${archia.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem><
          div className="flex items-center min-h-screen dark:bg-black  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] bg-[#f8f2f2] ">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
