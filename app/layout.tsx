'use client'

import './globalStyles/normalize.css'
import './globalStyles/globals.css'
import './globalStyles/header.css'
import './globalStyles/menu.css'
import './globalStyles/mobile-navbar.css'
import './globalStyles/catalog-menu.css'
// import './globalStyles/search-modal.css'
// import './globalStyles/cart-popup.css'
// import './globalStyles/footer.css'
// import './globalStyles/slick-theme.css'
// import './globalStyles/slick.css'
// import './globalStyles/auth-popup.css'
// import './globalStyles/header-profile.css'
// import './globalStyles/cookie-popup.css'
// import './globalStyles/breadcrumbs.css'
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
