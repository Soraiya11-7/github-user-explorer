import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

function App() {
  const [username, setUsername] = useState('');
  console.log(username);


  return (
    <>
      <Navbar username={username} setUsername={setUsername} />

      <main className="min-h-[calc(100vh-122px)]  dark:bg-gray-900 transition-colors duration-200 ">
        <div className="flex flex-col md:flex-row gap-8 w-[90%] mx-auto">

          {/* UserProfile................. */}
          <div className="w-full lg:w-1/3">
            <h2>UserProfile</h2>
            <UserProfile username={username} />
          </div>
          {/* Repositories................. */}
          <div className="w-full lg:w-2/3">
            <h2>Repositories</h2>
          </div>
        </div>
      </main>

      <Footer></Footer>
    </>
  );
}

export default App;