import Header from "./components/Header/Header";
import "./components/Header/Header.css";
import Hero from "./components/Hero/Hero";
import "./components/Hero/Hero.css";
import "./index.css"
import "./app.css"
import Companies from "./components/companies/companies";
import Residencies from "./Residencies/Residencies";
import Value from "./components/Value/Value";
import Contact from "./components/Contact/Contact";
import GetStarted from "./components/getStarted/GetStarted";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="main-div">
    <Header />
    <Hero />
    <Companies />
    <Residencies />
    <Value />
    <Contact />
    <GetStarted />
    <Footer />
    </div>
  );
}

export default App;
