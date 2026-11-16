import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Rjohn Agrito | DevPortfolio",
  description: "Personal Web Developer Portfolio of Rjohn Agrito",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ background: "linear-gradient(135deg, #EADBC8 0%, #DAC0A3 100%)", color: "#24160F", minHeight: "100vh", margin: 0 }}>
        {children}
      </body>
    </html>
  )
}