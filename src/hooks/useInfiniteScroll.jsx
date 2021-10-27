import { useEffect, useCallback } from 'react'

const useInfiniteScroll = (fetchNextPage) => {
  const handleScroll = useCallback(() => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) {
      return
    }
    fetchNextPage()
  }, [fetchNextPage])
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])
}

export default useInfiniteScroll
