'use client'
import { useLang } from '@/hooks/useLang'
import img1 from '@/public/img/black-t.png'
import img2 from '@/public/img/orange-t.png'
import img3 from '@/public/img/violet-t.png'
import styles from '@/styles/MainPage/index.module.scss'
import productSubtitleStyles from '@/styles/productSubtitle/index.module.scss'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow } from 'swiper/modules'
import { Swiper as SwiperType } from 'swiper/types'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import { HeroSlide } from './HeroSlide'
import ProductSubtitle from '@/components/elements/ProductSubtitle/ProductSubtitle'
export const Hero = () => {
  const { translation, lang } = useLang()

  const slides = [
    {
      id: 1,
      title: `${translation[lang].main_page.tShirt} «Line» ${translation[lang].main_page.black}`,
      image: img1,
    },
    {
      id: 2,
      title: `${translation[lang].main_page.tShirt} «Line» ${translation[lang].main_page.orange}`,
      image: img2,
    },
    {
      id: 3,
      title: `${translation[lang].main_page.tShirt} «Line» ${translation[lang].main_page.violet}`,
      image: img3,
    },
  ]

  const handleSlideClick = (e: SwiperType) => {
    e.slideTo(e.clickedIndex)
  }

  return (
    <section className={styles.hero}>
      <h1 className='visually-hidden'>
        {translation[lang].main_page.hero_hidden_title}
      </h1>
      <div className={`container ${styles.hero__container}`}>
        <span className={styles.ad}>{translation[lang].common.ad}</span>
        <Swiper
          className={styles.hero__slider}
          effect='coverflow'
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          slidesPerView='auto'
          initialSlide={2}
          autoplay
          loop
          onClick={handleSlideClick}
          modules={[EffectCoverflow]}
          grabCursor
          centeredSlides
        >
          {slides.map((slide) => (
            <SwiperSlide className={styles.hero__slider__slide} key={slide.id}>
              <HeroSlide slide={slide} />
            </SwiperSlide>
          ))}
        </Swiper>
        <ProductSubtitle
          subtitleClassName={productSubtitleStyles.product_subtitle__subtitle}
          subtitleRectClassName={
            productSubtitleStyles.product_subtitle__subtitle__rect
          }
        />
        <h2 className={styles.hero__title}>
          <span
            className={`${styles.hero__title__subtitle} ${
              lang === 'ru' ? '' : styles.hero__title__subtitle_lang
            }`}
          >
            [ {translation[lang].main_page.hero_subtitle} ]
          </span>
          <span className={styles.hero__title__text}>
            {translation[lang].main_page.hero_title}
          </span>
        </h2>
      </div>
    </section>
  )
}
