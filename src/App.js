// import logo from './logo.svg';
import './App.css';
import './assets/scss/styles';
import { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Project from './components/Project';


function App() {

  const [categories] = useState ([
    {
      name: 'portfolio', description: 'Portfolio of six projects'},
    { name: 'contact', description: 'Contact form' },
    { name: 'resume', description: 'Resume of different skill' }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);


  return (
    <div>
      <header>
          <Nav
            categories={categories}
            setCurrentCategory={setCurrentCategory}
            currentCategory={currentCategory}
          ></Nav>
      </header>
      <main>
        <Project currentCategory={currentCategory}></Project>
        <About></About>
          
      </main>
    </div>
  );
}

export default App;
