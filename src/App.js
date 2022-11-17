// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './assets/scss/styles';
// import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/project/Home';
import About from './components/project/About';



function App() {
  return (
    <body>
      <Router>
      <div>
        <Header/>
          <main>
            <Routes>
              <Route path={process.env.PUBLIC_URL + '/'}>
                <Home />
              </Route>
              <Route path='/about-me'>
                <About />
              </Route>
            </Routes> 
          </main>
      </div>
      </Router>
      <Footer />
    </body>
  );
}

export default App;
