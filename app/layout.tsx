import './globals.css'
import './fonts.css'

export const metadata = {
  title: 'Mehdi Abdi | Software Engineer',
  description: 'Portfolio and blog',
};

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
