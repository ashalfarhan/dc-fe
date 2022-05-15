import clsx from 'clsx'
import { ChangeEvent, Suspense } from 'react'
import { AiFillCloud, AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
import { useRecoilCallback } from 'recoil'
import { locationSearchState } from '../../states'
import SearchResults from './SearchResults'

type SidebarProps = {
  isOpen: boolean
  onClose: () => void
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const setSearch = useRecoilCallback(
    ({ set }) =>
      (e: ChangeEvent<HTMLInputElement>) => {
        setTimeout(() => set(locationSearchState, e.target.value), 800)
      },
    []
  )

  return (
    <div
      className={clsx('w-full md:w-1/3 h-screen fixed bg-card z-20 transition-transform duration-500', [
        isOpen ? 'translate-x-0' : '-translate-x-[100%]',
      ])}
    >
      <div className="relative py-14 px-8 h-full">
        <button className="text-white p-2 top-2 absolute right-2" onClick={onClose}>
          <AiOutlineClose size={24} />
        </button>
        <div className="flex text-white border-2 border-white bg-inherit p-2 items-center space-x-2">
          <AiOutlineSearch size={24} className="text-accent" />
          <input
            type="text"
            placeholder="search location"
            className="bg-inherit flex-1"
            onChange={setSearch}
          />
        </div>
        <div className="h-full flex">
          <Suspense
            fallback={
              <AiFillCloud size={130} className="fill-slate-500 animate-pulse m-auto flex-1" />
            }
          >
            <SearchResults closeSidebar={onClose} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
