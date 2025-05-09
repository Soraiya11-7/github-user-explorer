import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useGitHubRepos(username, page = 1, perPage = 10) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (!username) {
      setRepos([]);
      setHasMore(true);
      return;
    }

    const fetchRepos = async () => {
      try {
        setLoading(true);
        setError(null);
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
        setHasMore(response?.data.length === perPage);
      } catch (err) {
        setError(err);
        if (err.response?.status === 404) {
          setHasMore(false);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username, page, perPage]);

  return { repos, loading, error, hasMore };
}