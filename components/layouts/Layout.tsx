'use client'

import Header from '../modules/Header'

export const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    {children}
    <div className=''>footer</div>
  </>
)