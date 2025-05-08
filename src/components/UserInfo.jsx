import React from 'react';
import LoadingSpinner from './LoadingSpinner';
import { FaGithub, FaMapMarkerAlt, FaBook, FaUsers, FaUserPlus } from 'react-icons/fa';

const UserInfo = () => {

    const user = "";
    const loading = false;

    if (loading) {
        <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-6'>
            <div className="flex flex-col items-center">

                {/* user profile image.................... */}
                <img
                    src={user?.avatar_url}
                    alt={user?.login}
                    className="w-32 h-32 rounded-full mb-4"
                />
                <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-1">{user?.name || user?.login}</h2>
                {user.login && (
                    <a
                        href={`https://github.com/${user?.login}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline mb-4 flex items-center"
                    >
                        <FaGithub className="mr-1" /> @{user?.login}
                    </a>
                )}

                {/* user Bio  & Location............................. */}
                {user.bio && (
                    <p className="text-gray-600 dark:text-gray-400 text-center mb-4">{user?.bio}</p>
                )}

                <div className="w-full space-y-3">
                    {user.location && (
                        <div className="flex items-center text-gray-700 dark:text-gray-300">
                            <FaMapMarkerAlt className="mr-2" />
                            <span>{user?.location}</span>
                        </div>
                    )}


                 {/* user stats..................................... */}
                    <div className="flex flex-col md:flex-row items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 gap-4">
                        <div className="flex flex-col items-center text-center">
                            <FaBook className="text-xl text-gray-700 dark:text-white" />
                            <div className="text-sm text-gray-600 dark:text-gray-400">Repositories</div>
                            <div className="font-bold text-gray-800 dark:text-white">{user?.public_repos}</div>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <FaUsers className="text-xl text-gray-700 dark:text-white" />
                            <div className="text-sm text-gray-600 dark:text-gray-400">Followers</div>
                            <div className="font-bold text-gray-800 dark:text-white">{user?.followers}</div>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <FaUserPlus className="text-xl text-gray-700 dark:text-white" />
                            <div className="text-sm text-gray-600 dark:text-gray-400">Following</div>
                            <div className="font-bold text-gray-800 dark:text-white">{user?.following}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;