import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/Navbar";
import { Banner } from "./components/Banner";
import { About } from "./components/About";
import { Project } from "./components/Project";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import {Education} from "./components/Education";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About/>
        <Education/>
      <Project />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
