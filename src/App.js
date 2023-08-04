
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './containers/home';
import About from './containers/about';
import Portfolio from './containers/portfolio';
import Skills from './containers/skills';
import Contact from './containers/contact';
import Resume from './containers/resume';
function App() {
  return (
    <div className="App">
      {/* particles js */}

      {/* navbar */}

      {/* main page content*/}
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/' element={<About />} />
        <Route path='/' element={<Contact />} />
        <Route path='/' element={<Portfolio />} />
        <Route path='/' element={<Resume />} />
        <Route path='/' element={<Skills />} />     
      </Routes>
    </div>
  );
}

export default App;
