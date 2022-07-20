import './App.css';
import ScreenBlock from './components/ScreenBlock.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const unblock = () => {
    alert('desbloqueada');
  }  

  return (
    <div className='App' onClick={unblock}>
      <ScreenBlock />
    </div>
  );
}

export default App;
