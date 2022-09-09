import {Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import About from './pages/About';
import Contacts from './pages/Contacts';
import {Helmet} from "react-helmet-async";
import Page404 from "./pages/Page404";

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>auffff</title>
        <meta name="og:description" content="Helmet main"/>
        <meta name="og:title" content="auffff"/>
        <meta property="og:url" content="http://10.66.81.209:3000"/>
        <meta property="og:image"
              content="https://blog.promopult.ru/wp-content/uploads/2019/02/checklist01-1200x630.png"/>
      </Helmet>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/about/*" element={<About/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="*" element={<Page404/>}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
