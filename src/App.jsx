import './assets/styles/App.scss';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      {/* <Main /> */}
      <Footer />
    </div>
  );
}

export default App;
