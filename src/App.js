import './App.css';
import LoginForm from './components/login-form';

function App() {
  const handleLogin = (data) => {
    console.log(data)
  }
  return (
    <div className="App">
      <LoginForm handleLogin={handleLogin} />
    </div>
  );
}

export default App;
