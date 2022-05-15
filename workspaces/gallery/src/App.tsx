import { useCallback, useEffect } from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import Layout from './components/Layout'
import MasonryGrid from './components/MasonryGrid'
import useIntersectionObs from './hooks/useIntersectionObs'
import $axios from './libs/axios'
import { photoFetchPage, photoState } from './state/photo'

function App() {
  const setPhotos = useSetRecoilState(photoState)
  const [bottomRef, isVisible] = useIntersectionObs<HTMLDivElement>({
    root: null,
    rootMargin: '0px',
    threshold: 1,
  })
  const [page, setPage] = useRecoilState(photoFetchPage)

  const fetctPhotos = useCallback(async () => {
    try {
      const { data } = await $axios.get(`/api/images?limit=8&page=${page}`)
      setPhotos(prev => [...prev, ...data.data])
    } catch (error) {
      console.error(error)
    }
  }, [page])

  useEffect(() => {
    fetctPhotos()
  }, [fetctPhotos, page])

  useEffect(() => {
    if (!isVisible) return
    setPage(prev => prev + 1)
  }, [isVisible])

  return (
    <Layout>
      <MasonryGrid />
      <div ref={bottomRef} />
    </Layout>
  )
}

export default App
