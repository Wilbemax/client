import Link from 'next/link'

export const FooterMobileLink = ({ text }: { text: string }) => (
  <div className='footer__mobile'>
    <Link href='#'>{text}</Link>
  </div>
)
