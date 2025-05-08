import { useEffect, useState } from 'react';
import { FaMoon } from 'react-icons/fa';
import { FiSun } from 'react-icons/fi';

export default function ThemeToggle() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        // Check for saved theme in localStorage............
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    return (
        <>
            <button
                onClick={toggleTheme}
                className="p-1.5 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
            >
                {theme === 'dark' ? (
                    <FiSun className="text-yellow-400 text-xl" />
                ) : (
                    <FaMoon className="text-gray-700 text-xl" />
                )}
            </button>

        </>
    );
}