import clsx from 'clsx';
import { useState } from 'react';
import { CgProfile } from 'react-icons/cg';
import { FaUsers } from 'react-icons/fa';
import { MdArrowUpward, MdOutlineLogout } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Logo } from '../Icons';
import { useAuth } from '@hooks';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { logout } = useAuth();

  return (
    <header className="flex items-center justify-between py-4 px-12 sm:px-8 relative">
      <Link to="/">
        <Logo />
      </Link>
      <button
        className="flex items-center space-x-2"
        data-testid="dropdownToggle"
        onClick={() => setDropdownOpen(prev => !prev)}
      >
        <img src="/devchallenges.png" alt="" width={32} height={32} />
        <div className="sm:flex hidden items-center space-x-2">
          <div>John Doe</div>
          <MdArrowUpward />
        </div>
      </button>
      <nav
        className={clsx(
          'w-[188px] absolute top-14 right-6 border rounded-xl py-2 px-4 bg-white shadow-md transition-all dark:bg-[#252329]',
          [
            dropdownOpen
              ? 'visible opacity-100'
              : 'invisible opacity-0 transform translate-x-[200px]',
          ]
        )}
      >
        <Link
          to="/profile"
          className="flex items-center space-x-4 p-2 dark:bg-[#252329]"
        >
          <CgProfile />
          <span>My Profile</span>
        </Link>
        <Link
          to="/"
          className="flex items-center space-x-4 p-2 dark:bg-[#252329]"
        >
          <FaUsers />
          <span>Group Chat</span>
        </Link>
        <hr />
        <button
          onClick={logout}
          className="flex items-center space-x-4 p-2 text-red-400 dark:bg-[#252329]"
        >
          <MdOutlineLogout />
          <span>Logout</span>
        </button>
      </nav>
    </header>
  );
};

export default Header;
