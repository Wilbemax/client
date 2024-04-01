import Link from 'next/link'

export const Logo = () => (
    <Link className='logo' href='/'>
        {/* <img className='logo__img' src="/img/logo.svg" alt="WBMstore" /> */}
        <p className='logo__img' style={{ fontSize: 32 }}>
            WBMstore
        </p>
    </Link>
)
