import LoadingSpinner from './LoadingSpinner';
import useGitHubRepos from '../hooks/useGitHubRepos';
import RepositoryCard from './repo/RepositoryCard';
import { useEffect, useState, useCallback } from 'react';
import { FiFilter } from 'react-icons/fi';

const Repositories = ({ username }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [page, setPage] = useState(1);
  const { repos, loading, error, hasMore } = useGitHubRepos(username, page, 10); // Load 10 per page
  const [allLanguages, setAllLanguages] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  // Track all loaded repositories...............
  const [loadedRepos, setLoadedRepos] = useState([]);

  useEffect(() => {
    // Reset when username changes......
    setPage(1);
    setLoadedRepos([]);
    setAllLanguages([]);
  }, [username]);

  useEffect(() => {
    if (repos.length > 0) {
      // Combine new repos with existing ones...........
      setLoadedRepos(prev => [...prev, ...repos]);

      // Update languages list........
      const newLanguages = [...new Set(repos.map(repo => repo.language).filter(Boolean))];
      setAllLanguages(prev => [...new Set([...prev, ...newLanguages])]);
    }
  }, [repos]);

  const filteredRepos = selectedLanguage === 'all'
    ? loadedRepos
    : loadedRepos.filter(repo => repo.language === selectedLanguage);

  // Infinite scroll handler.............
  const handleScroll = useCallback(() => {
    if (loading || !hasMore) return;

    const {scrollTop, clientHeight, scrollHeight} = document.documentElement;
    if (scrollHeight - scrollTop <= clientHeight + 100) {
      setPage(prev => prev + 1);
    }
  }, [loading, hasMore]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  if (!username) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">
            Search for a GitHub username
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Enter a username in the search bar to see their repositories
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">
            Error loading repositories
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {error.response?.status === 404
              ? 'User not found'
              : 'An error occurred while fetching repositories'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-2 pb-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
          Repositories
          {filteredRepos.length > 0 && (
            <span className="ml-2 text-sm font-normal text-gray-600 dark:text-gray-400">
              ({filteredRepos.length} {filteredRepos.length === 1 ? 'repo' : 'repos'})
            </span>
          )}
        </h3>
        {allLanguages.length > 0 && (
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center px-3 py-2 bg-gray-100 dark:bg-gray-700 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            <FiFilter className="mr-2" />
            Filter
          </button>
        )}
      </div>

      {showFilters && allLanguages.length > 0 && (
        <div className="mb-6">
          <label htmlFor="language-filter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Filter by Language
          </label>
          <select
            id="language-filter"
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="block w-full rounded-md border-gray-300 py-2 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
          >
            <option value="all">All Languages</option>
            {allLanguages.map(language => (
              <option key={language} value={language}>
                {language}
              </option>
            ))}
          </select>
        </div>
      )}

      {loading && page === 1 ? (
        <LoadingSpinner />
      ) : loadedRepos.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-600 dark:text-gray-400">
            No repositories found for this user
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredRepos.map(repo => (
            <RepositoryCard
              key={repo.id}
              repo={repo}
            />
          ))}
          {loading && page > 1 && <LoadingSpinner />}
          {!loading && !hasMore && filteredRepos.length > 0 && (
            <div className="text-center py-4 text-gray-500 dark:text-gray-400">
              No more repositories to load
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Repositories;