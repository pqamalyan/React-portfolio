import React, {useState , useEffect} from "react";
import {BrowserRouter as Router,Routes,Route,Link,useNavigate,useLocation,Outle, BrowserRouter,} from "react-router-dom";
import { Container,Nav,Navbar } from "react-bootstrap";
import "../Menu/Menu.css"
import Home from "../Home/Home";
import About from "../About/About";
import Resume from "../Resume/Resume"
import Contact from "../../Contact/Contact";
import "bootstrap/js/dist/collapse"
import "bootstrap/js/dist/offcanvas"
import "bootstrap/js/dist/dropdown"
import "bootstrap/dist/css/bootstrap.min.css"
import {AiOutlineHome} from "react-icons/ai"
import {RxResume} from "react-icons/rx"
import {AiOutlineInfoCircle} from 'react-icons/ai'
import {AiFillPhone} from 'react-icons/ai'


export default function  Menu(){
    return(
      <BrowserRouter >
      <div  >
        <>
        <nav class="navbar navbar-expand-lg   ">
  <div class="container " >
    <a class="navbar-brand" href="/">Portfolio</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div  class="collapse navbar-collapse " id="navbarTogglerDemo02" >
      <ul class=" navbar-nav me-auto mb-2 mb-lg-0 text-center  ">
            <Nav.Link  style={{color:"gainsboro"}} as={Link} to="/"><AiOutlineHome  fontSize={"20px"}/><a datatype="home">Home</a></Nav.Link>
            <Nav.Link  style={{color:"gainsboro"}} as={Link} to="/about"><AiOutlineInfoCircle fontSize={"20px"}/>About</Nav.Link>
            <Nav.Link  style={{color:"gainsboro"}} as={Link} to="/resume"><RxResume  fontSize={"20px"} color="white"/>Resume</Nav.Link>
            <Nav.Link  style={{color:"gainsboro"}} as={Link} to="/contact"><AiFillPhone fontSize={"20px"}/>Contact</Nav.Link>
      </ul>

    </div>
  </div>
</nav>
       
  

      </>
      <div className="Header">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
      </div>
      </BrowserRouter>
    )}
  

  
  
  





