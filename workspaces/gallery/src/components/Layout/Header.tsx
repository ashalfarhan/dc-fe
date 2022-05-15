import Logo from '../Logo'
import { AiOutlineSearch } from 'react-icons/ai'
import { useModal } from '../../contexts/modal'
import AddPhotoModal from '../modals/AddPhotoModal'
import { useRecoilCallback } from 'recoil'
import { photoSearchState } from '../../state/photo'
import { ChangeEvent } from 'react'
import Button from '../shared/Button'

export default function Header() {
  const openModal = useModal(AddPhotoModal, 'Add a new photo')
  const setSearch = useRecoilCallback(
    ({ set }) =>
      (e: ChangeEvent<HTMLInputElement>) => {
        setTimeout(() => set(photoSearchState, e.target.value), 500)
      },
    []
  )
  return (
    <header className="py-8 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Logo />
        <label
          htmlFor="search-input"
          className="md:flex items-center border-2 border-gray-300 px-5 py-3 rounded-xl space-x-4 hidden"
        >
          <AiOutlineSearch size={24} className="text-gray-300" />
          <input
            id="search-input"
            type="text"
            placeholder="Search by name"
            onChange={setSearch}
            className="focus:outline-none text-gray-500"
          />
        </label>
      </div>
      <Button onClick={openModal}>Add a photo</Button>
    </header>
  )
}
