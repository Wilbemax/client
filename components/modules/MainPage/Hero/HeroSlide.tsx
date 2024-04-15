import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/MainPage/index.module.scss'
import { IHeroSlide } from '@/types/main-page'
import HeroSlideTooltip from './HeroSlideTooltip'
export const HeroSlide = ({ slide }: { slide: IHeroSlide }) => (
  <>
    <Link href='/catalog' className='hero-slide-plus' />
    <Image
      src={slide.image}
      alt={slide.title}
      className={styles.hero__slider__slide__img}
      loading='eager'
    />
    <HeroSlideTooltip title={slide.title} image={slide.image} />
  </>
)
