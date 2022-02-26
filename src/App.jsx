import Home from './views/Home';
import "./App.css";
import { useState } from 'react';

function App() {
  const [user] = useState({ name: 'Vladimir Juarez', avatar: '' });

  return (
    <div
      id="appWrapper"
      className="flex justify-center bg-primary w-screen h-screen text-white"
    >
      <Home user={user} />
    </div>
  );
}

export default App;
