
import './globals.css'

export const metadata = {
  title: 'Mynul Alam Portfolio',
  description: 'Flutter Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
