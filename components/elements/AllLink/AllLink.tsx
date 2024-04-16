'use client'
import { useLang } from '@/hooks/useLang'
import Link from 'next/link'
import styles from '@/styles/MainPage/index.module.scss'

export const AllLink = () => {
  const { lang, translation } = useLang()
  return (
    <Link href='/catalog' className={styles.all}>
      <span />
      {translation[lang].common.all_link}
    </Link>
  )
}
