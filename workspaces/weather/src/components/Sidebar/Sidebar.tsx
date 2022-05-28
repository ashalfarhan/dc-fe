import { useSearchLocation } from '@app/services';
import { useDebouncedValue } from '@ashalfarhan/hooks';
import clsx from 'clsx';
import { useState } from 'react';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import { SearchResultItem } from './SearchResults';

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const [query, setQuery] = useState('');
  const debouncedSearch = useDebouncedValue(query);
  const { data, isNotFound } = useSearchLocation(debouncedSearch);
  return (
    <div
      className={clsx(
        'absolute bg-card z-20 transition-transform duration-500 w-full h-full inset-0',
        [isOpen ? 'translate-x-0' : '-translate-x-[100%]']
      )}
    >
      <div className="relative py-14 px-8 h-full">
        <button
          className="text-white p-2 top-2 absolute right-2"
          onClick={onClose}
        >
          <AiOutlineClose size={24} />
        </button>
        <div className="flex text-white border-2 border-white bg-inherit p-2 items-center space-x-2">
          <AiOutlineSearch size={24} className="text-accent" />
          <input
            type="text"
            placeholder="search location"
            className="bg-inherit flex-1"
            onChange={e => setQuery(e.target.value)}
            value={query}
          />
        </div>
        <div className="h-full flex">
          <div className="flex flex-col space-y-2 mt-12 flex-1 overflow-y-scroll">
            {data &&
              data.map(result => (
                <SearchResultItem closeSidebar={onClose} location={result} />
              ))}
            {isNotFound && <h1 className="m-auto">No result found</h1>}
          </div>
        </div>
      </div>
    </div>
  );
};
