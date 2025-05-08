import { FaGithub, FaSearch,  FaUser } from 'react-icons/fa';
import { useEffect, useState,  } from 'react';
import ThemeToggle from './ThemeToggle';
import useDebounce from '../hooks/useDebounce';

const Navbar = ({ user, setUsername }) => {

  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearch = useDebounce(searchQuery, 500);

  useEffect(() => {
    setUsername(debouncedSearch);
  }, [debouncedSearch, setUsername]);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md ">
   <div className="w-[90%] mx-auto container text-white py-4 flex flex-row items-center justify-between">
        {/* Left side - (logo + name)............................ */}
        <div className="flex items-center space-x-2">
          <FaGithub className="text-2xl text-gray-800 dark:text-white" />
          <span className="font-bold text-gray-800 dark:text-white hidden sm:inline text-xl">GitInsights</span>
        </div>

        {/* Middle - Search bar................................. */}
        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 text-black dark:text-white border border-gray-300 rounded-md bg-white dark:bg-gray-700 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
              placeholder="Search GitHub username..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Right side - Theme toggle and avatar........................ */}
        <div className="flex items-center space-x-2">

        {/* Theme btn............................ */}
          <ThemeToggle></ThemeToggle>

          {/* User avatar....................... */}
          {user?.avatar_url ? (
            <img
              src={user?.avatar_url}
              alt={user.login}
              className="w-8 h-8 rounded-full"
            />
          ) : (
            <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
              <FaUser className="text-gray-600 dark:text-gray-300" />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;