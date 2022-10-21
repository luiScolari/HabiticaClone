import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import ProfileMenu from './components/ProfileMenu/ProfileMenu';
import Tasks from './components/Tasks/Tasks';

function App() {
  const [habitos, setHabitos] = useState([{
    titulo: 'habito1',
    obs: 'obs1'
  },
  {
    titulo: 'habito2',
    obs: 'obs2'
  }])

  return (
    <div className="App">
      <Navbar />
      <ProfileMenu />
      <Tasks habitos={habitos} />
    </div>
  );
}

export default App;
