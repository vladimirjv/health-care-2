// import Home from './routes/Home';
import "./App.css";
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div
      id="appWrapper"
      className="flex justify-center bg-primary w-screen h-screen text-white"
    >
      <Outlet />
    </div>
  );
}

export default App;
