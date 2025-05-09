import { useEffect, useState } from 'react';
import useGitHubRepos from '../hooks/useGitHubRepos';
import RepositoryCard from './repo/RepositoryCard';
import LanguageFilter from './repo/LanguageFilter';
import InfiniteScroll from './repo/InfiniteScroll';
import LoadingSpinner from './LoadingSpinner';

const Repositories = ({ username, userError }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [page, setPage] = useState(1);
  const { repos, loading, error, hasMore } = useGitHubRepos(username, page, 10);
  const [allLanguages, setAllLanguages] = useState([]);
  const [loadedRepos, setLoadedRepos] = useState([]);

  // Reset when username changes
  useEffect(() => {
    setPage(1);
    setLoadedRepos([]);
    setAllLanguages([]);
    setSelectedLanguage('all');
  }, [username]);

  // Update loaded repos and languages
  useEffect(() => {
    if (repos.length > 0) {
      setLoadedRepos(prev => [...prev, ...repos]);
      const newLanguages = [...new Set(repos.map(repo => repo.language).filter(Boolean))];
      setAllLanguages(prev => [...new Set([...prev, ...newLanguages])]);
    }
  }, [repos]);

  // Filter repos by selected language
  const filteredRepos = selectedLanguage === 'all'
    ? loadedRepos
    : loadedRepos.filter(repo => repo.language === selectedLanguage);

  const loadMore = () => {
    setPage(prev => prev + 1);
  };

  if (!username) {
    return (
      <div className="flex items-center justify-center mt-2 md:min-h-screen">
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

  if (userError?.response?.status === 404) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">
            User not found
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            The username "{username}" doesn't exist on GitHub
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
            {error.response?.status === 403
              ? 'API rate limit exceeded. Please try again later'
              : 'An error occurred while fetching repositories'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-2 pb-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg md:text-xl font-bold text-gray-800 dark:text-white">
          Repositories
          {filteredRepos.length > 0 && (
            <span className="ml-1 text-sm font-normal text-gray-600 dark:text-gray-400">
              ({filteredRepos.length})
            </span>
          )}
        </h3>
        {allLanguages.length > 0 && (
          <LanguageFilter
            languages={allLanguages}
            selectedLanguage={selectedLanguage}
            onLanguageChange={setSelectedLanguage}
          />
        )}
      </div>

      {loading && page === 1 ? (
        <LoadingSpinner />
      ) : loadedRepos.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-600 dark:text-gray-400">
            No public repositories found for this user
          </p>
        </div>
      ) : (
        <InfiniteScroll
          loading={loading && page > 1}
          hasMore={hasMore}
          onLoadMore={loadMore}
          endMessage="No more repositories to load"
        >
          <div className="space-y-4">
            {filteredRepos.map(repo => (
              <RepositoryCard
                key={repo.id}
                repo={repo}
              />
            ))}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
};

export default Repositories;