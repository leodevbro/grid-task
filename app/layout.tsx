import { ReactElement } from 'react'
import Providers from './providers'
export default async function RootLayout({
  children
}: {
  children: ReactElement
}) {
  return (
    <html lang={`en`}>
      <head>
        <title>Linx Security</title>
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
