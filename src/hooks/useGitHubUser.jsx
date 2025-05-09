import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export default function useGitHubUser(username) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!username) {
      setUser(null);
      return;
    }

    const fetchUser = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        console.log("Fetched user:", response.data);
        setUser(response.data);
      } catch (err) {
        console.error("API Error:", err);
        setUser(null);
        setError(err);
        if (err.response?.status === 404) {
          toast.error('User not found');
        }else if (err.response?.status === 403){
          toast.error("API rate limit exceeded. Please try again later")
        }
         else {
          toast.error('Error fetching user');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [username]);

  return { user, loading, error };
}
