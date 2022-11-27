import Header from "./Components/Header";
import {BrowserRouter,Routes,Route}from "react-router-dom"
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Footer from "./Components/Footer.jsx";
import Service from "./Components/Service.jsx";



import "./Style/app.scss"
import "./Style/colors.scss"
import "./Style/header.scss"
import "./Style/home.scss"
import "./Style/footer.scss"
import "./Style/contact.scss"
import "./Style/media.scss"








function App() {
  return (
<BrowserRouter>

<Header />

  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/services" element={<Service/>} />

    <Route path="*" element={<h1>Page not found 404</h1>} />


  </Routes>
  <Footer />
</BrowserRouter>
  );
}

export default App;
