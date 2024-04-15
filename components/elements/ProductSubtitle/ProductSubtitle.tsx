import { useLang } from '@/hooks/useLang'
import { IProductSubtitleProps } from '@/types/elements'

const ProductSubtitle = ({
  subtitleClassName,
  subtitleRectClassName,
}: IProductSubtitleProps) => {
  const { lang, translation } = useLang()
  const descriptionSlicePosition = lang === 'ru' ? 5 : 2

  return (
    <div className={subtitleClassName}>
      <div className={subtitleRectClassName} />
      <span>
        {translation[lang].main_page.hero_description.slice(
          0,
          descriptionSlicePosition
        )}
      </span>
      <br />
      <span>
        {translation[lang].main_page.hero_description.slice(
          descriptionSlicePosition
        )}
      </span>
    </div>
  )
}

export default ProductSubtitle
