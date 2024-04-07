import { useLang } from '@/hooks/useLang'
import { useModals } from '@/hooks/useModals'
import { removeOverflowHIddenFromBody } from '@/lib/utils/common'

export const SearchModal = () => {
  const { setSearch } = useModals()
  const { lang, translation } = useLang()
  const handleInputFocus = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => {
    e.target.classList.add('with_value')
  }

  const handleInputBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement, Element>
  ) => {
    if (e.target.value) {
      return
    }

    e.target.classList.remove('with_value')
  }

  const handleCloseSearchModal = () => {
    setSearch(false)
    removeOverflowHIddenFromBody()
  }
  return (
    <div className='search-modal'>
      <button
        onClick={handleCloseSearchModal}
        className='btn-reset search-modal__close'
      />
      <h3 className='search-modal__title'>
        {translation[lang].header.search_products}
      </h3>
      <div className='search-modal__top'>
        <label className='search-modal__label'>
          <input
            type='text'
            className='search-modal__input'
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
          <span className='search-modal__floating_label'>
            {translation[lang].header.search_infos}
          </span>
        </label>
      </div>
    </div>
  )
}
