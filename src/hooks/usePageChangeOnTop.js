import { useEffect } from "react"

const usePageChangeOnTop = (dependencies) => {
    useEffect(() => {
        window.scroll({'top': 0, 'behavior': 'smooth'})
    }, dependencies)
}

export default usePageChangeOnTop