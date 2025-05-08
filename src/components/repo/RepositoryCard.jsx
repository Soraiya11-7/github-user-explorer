import { FiStar, FiGitBranch } from 'react-icons/fi';
import { getLanguageColor } from '../utils/GithubLanguages';

const RepositoryCard = ({ repo }) => {

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'short', 
          day: 'numeric' 
        });
      };

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-bold text-base sm:text-lg text-blue-500 dark:text-blue-400 mb-1">

            {/* name................... */}
            <a
              href={repo?.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {repo?.name}
            </a>
          </h4>
          {repo?.description && (
            <p className="text-gray-600 dark:text-gray-400 mb-3 text-sm sm:text-base">{repo?.description}</p>
          )}
        </div>
      </div>
      
      {/* language............... */}
      <div className="flex flex-wrap items-center gap-4 mt-3 text-sm">
        {repo?.language && (
          <span className="inline-flex items-center text-gray-600 dark:text-gray-400 text-xs sm:text-sm">
            {/* add color for related language........*/}
            <span 
              className="w-3 h-3 rounded-full mr-1" 
              style={{ backgroundColor: getLanguageColor(repo.language) }}
            ></span>
            {repo?.language}
          </span>
        )}

        {/* star count............................ */}
        <a
          href={`${repo.html_url}/stargazers`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 text-xs sm:text-sm"
        >
          <FiStar className="mr-1" />
          {repo?.stargazers_count}
        </a>

        {/* fork count.......... */}
        <a
          href={`${repo?.html_url}/network/members`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 text-xs sm:text-sm"
        >
          <FiGitBranch className="mr-1" />
          {repo?.forks_count}
        </a>

       {/* updated date ...................*/}
        <span className="text-gray-600 dark:text-gray-400 ml-auto text-xs sm:text-sm">
          Updated {formatDate(repo?.updated_at)}
        </span>
      </div>
    </div>
  );
};

export default RepositoryCard;