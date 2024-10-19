import { useState, useEffect } from 'react';
import './App.css'
import Header from './components/Header'
import Present from './components/Present'
import Slide from './components/Slide'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  return (
    <div className={`app ${theme}`}>
     <Header mudarTema={toggleTheme}></Header>
     <Present></Present>
     <Slide></Slide>
     <About></About>
     <Projects></Projects>
     <Skills></Skills>
     <Contact></Contact>
     <Footer></Footer>
    </div>
  )
}

export default App
