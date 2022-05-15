import { BsChevronRight } from 'react-icons/bs'
import { useToggle } from '@ashalfarhan/hooks'
import clsx from 'clsx'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { locationSearchResult, locationSearchState, selectedLocationState } from '../../states'
import { LocationResult } from '../../types/model'

const SearchResults = ({ closeSidebar }: { closeSidebar: () => void }) => {
  const searchResults = useRecoilValue(locationSearchResult)
  const searchQuery = useRecoilValue(locationSearchState)

  return (
    <div className="flex flex-col space-y-2 mt-12 flex-1 overflow-scroll">
      {searchQuery === '' ? null : searchResults.length > 0 ? (
        searchResults.map(res => (
          <SearchResult location={res} closeSidebar={closeSidebar} key={res.woeid} />
        ))
      ) : (
        <h1 className="m-auto">No result found</h1>
      )}
    </div>
  )
}

type SearchResultProps = {
  location: LocationResult
  closeSidebar: () => void
}

const SearchResult = ({ location, closeSidebar }: SearchResultProps) => {
  const { open, onOpen, onClose } = useToggle()
  const setSelectedLocation = useSetRecoilState(selectedLocationState)

  return (
    <button
      className="p-4 flex items-center justify-between hover:border-accent border-2 border-transparent text-left"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      onClick={() => {
        setSelectedLocation(location)
        closeSidebar()
      }}
    >
      <span>{location.title}</span>
      <BsChevronRight
        className={clsx('transition-opacity', [open ? 'opacity-100' : 'opacity-0'])}
      />
    </button>
  )
}
export default SearchResults
