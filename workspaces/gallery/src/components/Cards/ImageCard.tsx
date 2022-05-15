import clsx from 'clsx'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useModal } from '../../contexts/modal'
import { Photo } from '../../types/model'
import RemoveImageModal from '../modals/RemovePhotoModal'

const ImageCard = ({ image }: { image: Photo }) => {
  const [backdropOpen, setBackdropOpen] = useState(false)
  const openRemoveModal = useModal(RemoveImageModal, 'Are you sure?', { photoId: image.id })
  return (
    <motion.div
      layout
      layoutScroll
      className="relative cursor-pointer"
      onMouseEnter={() => setBackdropOpen(true)}
      onMouseLeave={() => setBackdropOpen(false)}
    >
      <img
        src={image.url}
        alt={image.label}
        height={image.height}
        width={image.width}
        className={clsx('rounded-2xl transition-all', { ['brightness-50']: backdropOpen })}
      />
      <p
        className={clsx(
          'absolute text-lg bottom-4 left-4 font-montserrat text-white transition-all',
          {
            'opacity-0 invisible': !backdropOpen,
          }
        )}
      >
        {image.label}
      </p>
      <button
        onClick={openRemoveModal}
        className={clsx(
          'font-montserrat absolute right-4 top-4 transition-all border-2 border-red-500 text-red-500 py-[5.24px] px-[15.87px] text-xs rounded-3xl',
          { 'opacity-0 invisible': !backdropOpen }
        )}
      >
        delete
      </button>
    </motion.div>
  )
}

export default ImageCard
