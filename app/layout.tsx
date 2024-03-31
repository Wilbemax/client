
import type { Metadata } from 'next'
import './globalStyels/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Layout } from '@/components/layouts/Layout'
import { Provider } from 'react-redux'
import { store } from '@/store'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <Provider store={store}>
        <body>
          <Layout>{children}</Layout>
        </body>
      </Provider>
    </html>
  )
}
