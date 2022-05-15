import { AnimatePresence } from 'framer-motion'
import { cloneElement, createContext, FC, isValidElement, ReactNode, useState } from 'react'
import { ModalContextValues } from './types'
import Backdrop from '../../components/Backdrop'

export const ModalContext = createContext<ModalContextValues | undefined>(undefined)

export const ModalProvider: FC = ({ children }) => {
  const [content, setContent] = useState<ReactNode>(null)
  const [title, setTitle] = useState<ReactNode>(null)

  const [isOpen, setIsOpen] = useState(false)

  const closeModal = () => {
    setContent(null)
    setTitle(null)
    setIsOpen(false)
  }

  const openModal = () => setIsOpen(true)
  return (
    <ModalContext.Provider value={{ openModal, setContent, setTitle }}>
      <AnimatePresence>
        {isOpen && isValidElement(content) ? (
          <Backdrop onClick={closeModal}>
            <div
              onClick={e => e.stopPropagation()}
              className="bg-white w-[90vw] md:w-[600px] px-8 py-5 rounded-xl"
            >
              <h1 className="text-2xl pb-4 font-medium text-[#333333]">{title}</h1>
              {cloneElement(content, { closeModal })}
            </div>
          </Backdrop>
        ) : null}
      </AnimatePresence>
      {children}
    </ModalContext.Provider>
  )
}
