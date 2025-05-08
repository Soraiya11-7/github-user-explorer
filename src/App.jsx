import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import { Toaster } from 'react-hot-toast';
import useGitHubUser from './hooks/useGitHubUser';

function App() {
  const [username, setUsername] = useState('');
  console.log(username);

  const { user, loading } = useGitHubUser(username);


  return (
    <>
      <Navbar user={user} setUsername={setUsername}/>

      <main className="min-h-[calc(100vh-122px)]  dark:bg-gray-900 transition-colors duration-200 ">
        <div className="flex flex-col md:flex-row gap-8 w-[90%] mx-auto">

          {/* UserProfile................. */}
          <div className="w-full lg:w-2/5">
            <UserProfile user={user} loading={loading} />
          </div>
          {/* Repositories................. */}
          <div className="w-full lg:w-3/5">
            <h2>Repositories</h2>
          </div>
        </div>
      </main>

      <Footer></Footer>
      <Toaster position="top-right" />
    </>
  );
}

export default App;