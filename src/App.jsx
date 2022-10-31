import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import ProfileMenu from './components/ProfileMenu/ProfileMenu';
import Tarefas from './components/Tarefas/Tarefas';

function App() {
  const [habitos, setHabitos] = useState([{
    titulo: 'Habito1',
    obs: 'mentum, efficitur eu mi'
  },
  {
    titulo: 'Habito2',
    obs: 'mentum, efficitur eu mi'
  }])

  return (
    <div className="App">
      <Navbar />
      <ProfileMenu />
      <Tarefas habitos={habitos} />
    </div>
  );
}

export default App;
