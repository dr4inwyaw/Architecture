import './App.css';
import Nav from './components/Nav.jsx'
import Header from './components/Header';
import About from './components/About';
import Our from './components/Our_services';
import Footer from './components/Footer';
import React from 'react';

function App() {
  return (
     <div className="App">
      <Nav/>
      <Header/>
      <main>
        <About/>
        <Our/>
  	</main>
      <Footer/>
    </div>
  );
}

export default App;