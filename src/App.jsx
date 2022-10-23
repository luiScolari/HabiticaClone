import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import ProfileMenu from './components/ProfileMenu/ProfileMenu';
import Tarefas from './components/Tarefas/Tarefas';

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
      <Tarefas habitos={habitos} />
    </div>
  );
}

export default App;
