import { Typewriter } from "react-simple-typewriter";
import { Container, Row,Col } from "react-bootstrap";
import "../Home/Home.css"
import { BsTelephone } from 'react-icons/bs';
import {AiOutlineMail} from "react-icons/ai"
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";

export default function Home() {


    return(
      <div className="Home ">
        <main >
          <Container style={{zIndex:"1"}} >
            <Row className="d-flex flex-column text-center">
              
              <Col md style={{width:"100%"}}><h2> Hi, I am{" "}
            <span>
              <Typewriter
                loop
                cursor
                cursorStyle="_"
                typeSpeed={60}
                deleteSpeed={50}
                delaySpeed={1000}
                words={["Poghos Qamalyan", "Front-End Developer"]}
              />
            </span>
          </h2></Col>
          
          
          <br/>
          <Col md style={{width:"100%"}}><h4>
            I am a frontend web developer. I can provide clean code and pixel
            perfect design. I also make website more & more interactive with web
            animations.
          </h4></Col>
          <br/>

             
            <Col md  style={{width:"100%" }}>
            <ul style={{listStyle:"none", display:"flex",justifyContent:"center",fontSize:"40px" ,textAlign:"center",paddingLeft:"0"}}>
            <li style={{textAlign:"center"}}>
              <a id="facebook"
                rel="noopener noreferrer"
                target="_blank"
                href="https://facebook.com"
              >
                
                <AiFillFacebook id="fb"  />
              </a>
            </li>
            <li>
              <a id="instagram"
                rel="noopener noreferrer"
                target="_blank"
                href="https://instagram.com"
              >
                <AiFillInstagram id="in"   />
              </a>
            </li>
            <li>
              <a id="twitter"
                rel="noopener noreferrer"
                target="_blank"
                href="https://twitter.com"
              >
                <AiFillTwitterCircle id="tw"  />
              </a>
            </li>
          </ul>
            </Col>
            
            </Row>
          </Container>
        </main>
        
        </div>
      
    )}










