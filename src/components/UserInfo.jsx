import React from 'react';
import LoadingSpinner from './LoadingSpinner';
import { FaGithub, FaMapMarkerAlt, FaBook, FaUsers, FaUserPlus, FaLink } from 'react-icons/fa';


const UserInfo = ({ user, loading }) => {


    console.log(user);

    if (loading) {
        <LoadingSpinner></LoadingSpinner>
    }

    //   for user stats ( code optimization)............................
    const itemClass = "flex flex-row items-left text-center ";
    const iconClass = "text-sm text-gray-700 dark:text-white mr-1";
    const labelClass = "text-xs text-gray-600 dark:text-gray-200 text-semibold mr-2";
    const valueClass = "font-bold text-xs text-gray-800 dark:text-white";
    return (
        <div className='bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6 md:p-4 mt-2'>
            <div className="flex flex-col items-center">

                {/* user profile image.................... */}
                <img
                    src={user?.avatar_url}
                    alt={user?.login}
                    className="w-32 h-32 rounded-full mb-4 dark:border dark:border-white"
                />
                <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-1">{user?.name || user?.login}</h2>
                <p className="text-gray-600 dark:text-gray-400 mt-1">@{user?.login || 'username'}</p>

                {/* user Bio  & Location............................. */}
                {user?.bio && (
                    <p className="text-gray-600 dark:text-gray-400 text-center mb-4">{user?.bio || "No Bio available"}</p>
                )}

                <div className="w-full space-y-3">

                    {/* user stats..................................... */}
                    <div className="flex flex-col sm:flex-row items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 gap-4 w-full">
                        <div className={itemClass}>
                            <FaBook className={iconClass} />
                            <div className={labelClass}>Repositories</div>
                            <div className={valueClass}>{user?.public_repos}</div>
                        </div>
                        <div className={itemClass}>
                            <FaUsers className={iconClass} />
                            <div className={labelClass}>Followers</div>
                            <div className={valueClass}>{user?.followers}</div>
                        </div>
                        <div className={itemClass}>
                            <FaUserPlus className={iconClass} />
                            <div className={labelClass}>Following</div>
                            <div className={valueClass}>{user?.following}</div>
                        </div>
                    </div>

                    {/* Location, Github................... */}

                    <div className="flex flex-col  items-center justify-between mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 gap-2 sm:gap-4">

                        {user?.location && (
                            <div className="flex items-center text-xs sm:text-base text-gray-700 dark:text-gray-300">
                                <FaMapMarkerAlt className="mr-2" />
                                <span>{user?.location}</span>
                            </div>
                        )}


                        {user?.html_url && (
                            <div className="flex items-center text-xs sm:text-base text-gray-700 dark:text-gray-300">
                                <FaGithub className="mr-2 " />
                                <span>{user?.html_url}</span>
                            </div>
                        )}


                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserInfo;