
import LoadingSpinner from './LoadingSpinner';
import useGitHubRepos from '../hooks/useGitHubRepos';
import RepositoryCard from './repo/RepositoryCard';

const Repositories = ({ username }) => {

    const { repos, loading, error } = useGitHubRepos(username, 1, 10);
    //    console.log(repos);

    if (!username) {
        return (
            <div className=" flex items-center justify-center min-h-screen">
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
            <div className=" flex items-center justify-center min-h-screen">
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
        <div className="pt-2 pb-8  ">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    Repositories
                </h3>
            </div>

            {loading ? (
                <LoadingSpinner />
            ) : repos?.length === 0 ? (
                <div className="text-center py-8">
                    <p className="text-gray-600 dark:text-gray-400">
                        No repositories found for this user
                    </p>
                </div>
            ) :
                (
                    // Repo Card.........................
                    <div className="space-y-4">
                        {repos.map(repo => (
                            <RepositoryCard
                                key={repo.id}
                                repo={repo}
                            />
                        ))}
                    </div>
                )}
        </div>
    );
};

export default Repositories;