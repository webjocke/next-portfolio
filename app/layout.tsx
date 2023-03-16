import './globals.css'
import Head from 'next/head'
import favicon from '../public/favicon.ico'

export const metadata = {
  title: 'Joakim Johanson - Full-Stack Developer and Founder of sizable.se',
  description: 'A Full-Stack Developer with a taste for business and entrepreneurship. Founder of sizable.se. Available for hire.',
  icons: {
    icon: { url: '/favicon.ico', type: 'image/x-icon' },
    shortcut: { url: '/favicon.ico', type: 'image/x-icon' },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
        <title>Joakim Johanson - Full-Stack Developer and Founder of sizable.se</title>
        <meta content="A Full-Stack Developer with a taste for business and entrepreneurship. Founder of sizable.se. Available for hire." name="description" />
      </Head>
      <body>{children}</body>
    </html>
  )
}
