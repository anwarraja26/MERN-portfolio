import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Certification from "../components/Certification";
import Contact from "../components/Contact";
import "../Styles/header.css"
import {BrowserRouter,Link,Routes,Route} from "react-router-dom"
export default function Header(){
    return(
        <div>
        <BrowserRouter>
        <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="About">About</Link></li>
            <li><Link to="/Skills">Skills</Link></li>
            <li><Link to="/Certification">Certification</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
        </ul>

        
            <Routes>
                <Route path="/Home" element={<Home />}></Route>
                <Route path="/About" element={<About />}></Route>
                <Route path="/Skills" element={<Skills />}></Route>
                <Route path="/Certification" element={<Certification />}></Route>
                <Route path="/Contact" element={<Contact />}></Route>
            </Routes>
        </BrowserRouter>


        </div>
    );
}