import { Dispatch, SetStateAction, ReactNode } from 'react'

export type ModalContextValues = {
  openModal: () => void
  setContent: Dispatch<SetStateAction<ReactNode>>
  setTitle: Dispatch<SetStateAction<ReactNode>>
}

export type InjectedModalProps = {
  closeModal: () => void
}
