import { Route, Routes } from "react-router-dom"
import Home from "../../Pages/Home/Home"
import Academics from "../../Pages/Academics/Academics"
import About from "../../Pages/About/About"
import ScrollToTop from "../ScrollToTop/ScrollToTop"
import Admission from "../../Pages/Admission/Admission"
import StudentLife from "../../Pages/StudentLife/StudentLife"
import Contact from "../../Pages/Contact/Contact"


const Main = () => {
    return (
        <main>
            <ScrollToTop/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/academics" element={<Academics/>}/>
                <Route path="/admission" element={<Admission/>}/>
                <Route path="/studentLife" element={<StudentLife/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </main>
    )
}

export default Main
