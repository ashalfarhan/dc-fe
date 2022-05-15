import { motion } from 'framer-motion'
import { ReactNode } from 'react'

type BackdropProps = {
  onClick: () => void
  children: ReactNode
}

export default function Backdrop({ onClick, children }: BackdropProps) {
  return (
    <motion.div
      className="h-screen w-screen max-w-[100vw] fixed z-10 bg-black bg-opacity-50 flex items-center justify-center"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  )
}
