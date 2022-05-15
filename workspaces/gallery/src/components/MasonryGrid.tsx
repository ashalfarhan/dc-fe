import { LayoutGroup } from 'framer-motion'
import { useRecoilValue } from 'recoil'
import { foundSearchPhoto } from '../state/photo'
import ImageCard from './Cards/ImageCard'

export default function MasonryGrid() {
  const data = useRecoilValue(foundSearchPhoto)
  return (
    <div className="sm:space-y-8 md:masonry-3 sm:masonry-2 space-y-4 min-h-screen">
      <LayoutGroup>
        {data.map(image => (
          <ImageCard image={image} key={image.id} />
        ))}
      </LayoutGroup>
    </div>
  )
}
