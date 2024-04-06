import { useLang } from "@/hooks/useLang"
import { useModals } from "@/hooks/useModals"
import { useState } from "react"

export const CatalogMenu = () => {
    const {catalogMenu} = useModals()
    const {lang, translation} = useLang()
    const [showClothList, setshowClothList] = useState(false)
    const [showAccessoriesList, setshowAccessoriesList] = useState(false)
    const [showSouwenirsList, setshowSouwenirsList] = useState(false)
    const [showOfficeList, setshowOfficeList] = useState(false)
    
  return (
    <div>CatalogMenu</div>
  )
}
