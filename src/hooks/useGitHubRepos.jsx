import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export default function useGitHubRepos(username, page = 1, perPage = 10) {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!username) {
            setRepos([]);
            return;
        }

        const fetchRepos = async () => {
            setLoading(true);
            setError(null);
            try {

                const response = await axios.get(
                    `https://api.github.com/users/${username}/repos`,
                    {
                        params: {
                            page,
                            per_page: perPage,
                            sort: 'updated',
                        },
                    }
                );
                setRepos(response?.data);
            } catch (err) {
                setError(err);
                setRepos([]);
                if (err.response?.status === 404) {
                    toast.error('User not found');
                } else if (err.response?.status === 403) {
                    toast.error('API rate limit exceeded. Please try again later.');
                } else {
                    toast.error('An error occurred while fetching repositories');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, [username, page, perPage]);

    return { repos, loading, error };
}