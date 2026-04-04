
import './App.css'
// // import { Link } from "react-router";
// import { BrowserRouter, Routes,Route,Link} from "react-router-dom";
// import Welcome from "./components/Welcome"
// import About from "./components/About";
// import Education from "./components/Education";
// import Contact from "./components/Contact";
// import Projects from  "./components/Projects";

// function App() {
 

//   return (
//     <>
//     <BrowserRouter>
//       <nav>
//         <ul>  
//            {/* hyperlinks that are displaying */}
//             <li> <Link to="/home">Home</Link></li>
//           <li> <Link to="/about">About</Link></li>
//           <li> <Link to="/education">Education</Link></li>
//            <li> <Link to="/projects">Projects</Link></li>
//             <li> <Link to="/contact">Contact</Link></li>
           

//         </ul>
//       </nav>
//       <Routes>                                                   {/* routes that actually connect to component */}
//         <Route path="/" element={<Welcome />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/education" element={<Education />} />
//         <Route path="/projects" element={<Projects />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>    
// </BrowserRouter>  
//     </>
//   )
// }

// export default App


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Layout from "./components/Layout";
import Welcome from "./components/Welcome";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
