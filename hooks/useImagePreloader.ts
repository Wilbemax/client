import { useState } from 'react'

export const useImagePreloader = () => {
  const [imgSpinner, setImgSpinner] = useState(true)

  const handelLoadingImageComplete = async (
    img: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    img.currentTarget.classList.remove('opacity-0')
    setImgSpinner(false)
  }
  return { handelLoadingImageComplete, imgSpinner }
}
