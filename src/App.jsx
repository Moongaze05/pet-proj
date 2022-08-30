import {Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import About from './pages/About';
import Contacts from './pages/Contacts';

function App() {
  return (
    <div className="App">
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
