
import {BrowserRouter} from 'react-router-dom'
import Routes from './router/routes';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
   
      <Navbar />
      <div className="container main">
           <Routes/>
      </div>
      <Footer />
    </BrowserRouter>
   
  )}

export default App;
