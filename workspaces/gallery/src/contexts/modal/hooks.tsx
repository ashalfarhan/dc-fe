import { ComponentType, ReactNode, useContext } from 'react'
import { InjectedModalProps } from '.'
import { ModalContext } from './Provider'

export const useModalContext = () => {
  const context = useContext(ModalContext)
  if (!context) throw new Error('`useModalContext` should be called inside `ModalProvider`')
  return context
}

export const useModal = <P extends InjectedModalProps>(
  ModalContent: ComponentType<P>,
  title?: ReactNode,
  props?: Omit<P, keyof InjectedModalProps>
) => {
  const { setContent, openModal, setTitle } = useModalContext()
  const handleOpen = () => {
    setContent(<ModalContent {...((props as P) || {})} />)
    setTitle(title)
    openModal()
  }

  return handleOpen
}
