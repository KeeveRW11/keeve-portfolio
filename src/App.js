// import logo from './logo.svg';
import './App.css';
import './assets/scss/styles';
import About from './components/About';
import Nav from './components/Nav';


function App() {
  return (
    <div>
      <header>
          <Nav/>
      </header>
      <main>
          <About/>
      </main>
    </div>
  );
}

export default App;
