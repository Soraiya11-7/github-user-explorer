import UserInfo from "./UserInfo";

const UserProfile = ({ username }) => {

  return (
    <div className="">
        {
            username? (<UserInfo></UserInfo>)
            :
            (
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gray-200 dark:bg-gray-700 mb-4"></div>
                  <div className="h-6 w-3/4 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                </div>
              </div>
            )   
        }
      
    </div>
  );
};

export default UserProfile;