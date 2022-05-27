import { BsChevronRight } from 'react-icons/bs';
import { SearchResult } from '@app/types';
import { usePosition } from '@app/states';

export function SearchResultItem({
  location,
  closeSidebar = () => {},
}: {
  location: SearchResult;
  closeSidebar: () => void;
}) {
  const changePosition = usePosition(state => state.update)
  return (
    <button
      className="p-4 flex items-center justify-between hover:border-accent border-2 border-transparent text-left"
      onClick={() => {
        changePosition({
          longitude: location.lon,
          latitude: location.lat,
        })
        closeSidebar();
      }}
    >
      <span>
        {location.name} - {location.country}
      </span>
      <BsChevronRight />
    </button>
  );
}
