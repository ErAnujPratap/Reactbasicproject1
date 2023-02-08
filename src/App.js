import {BrowserRouter,Routes ,Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Brands from "./components/Brands";
import Services from "./components/Services"
import Footer from "./components/Footer";
import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/mediaquery.scss";


function App() {
  return (
    
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/" element={<About />}/>
        <Route path="/" element={<Brands />}/>
        <Route path="/services" element={<Services />}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
      
    
  );
}

export default App;
