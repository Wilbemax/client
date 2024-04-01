'use client'

import '../app/globalStyels/global.css'
import '../app/globalStyels/normalize.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Layout } from '@/components/layouts/Layout'
import { Provider } from 'react-redux'
import { store } from '@/store'

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
