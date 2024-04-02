import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/img/Rostelecom.svg'

export const Logo = () => (
  <Link className='logo' href='/'>
    <Image src={logo} className='logo__img' alt='WBMstore' />
  </Link>
)
