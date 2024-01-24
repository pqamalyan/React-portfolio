import React, {useState,useEffect} from "react";
import { Container, Row,Col,ListGroup, Card } from "react-bootstrap";
import ScrollToTop from "react-scroll-to-top";
import "../Contact/Contact.css"
import Email from "./Mail";
import {AiFillPhone} from 'react-icons/ai'
import {AiOutlineMail} from 'react-icons/ai'
import {IoLocationSharp} from 'react-icons/io5'
import "bootstrap/dist/css/bootstrap.min.css"
export default function Contact () {
    const [scrollTop,setscrollTop]=useState(0)
      
    const onScroll=()=>{
      const winScrool=document.documentElement.scrollTop;
      const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
      const scrolled=(winScrool/height*100)
      setscrollTop(scrolled)
    }
    useEffect(()=>{
      window.addEventListener("scroll",onScroll);
      return()=>window.removeEventListener("scroll",onScroll)
    },[])
  
return(<div className="Contact">
    <Container   >
    <div className="progressmainstyle" style={{width:`${scrollTop}%`}}></div>
    <ScrollToTop top={70} />
        <Row className="d-flex justify-content-around align-items-center flex-wrap">
            <h2>CONTACT ME</h2>
            <Col  >
            <Email/>
            </Col>

<Col style={{height:"400px"}}>
    <Card style={{background:"none",height:'400px',margin:'30px',border:"none"}}>
    <Card.Text style={{height:"120px"}}><AiFillPhone fontSize={"30"}/>Phone<br/> 093-75-88-23<br/>095-75-88-23</Card.Text>
    <Card.Text style={{height:"120px"}}><AiOutlineMail fontSize={"30"}/>Email <br/>qamalyanpogos@8gmail.com<br/>p.qamalyan@icloud.com</Card.Text>
    <Card.Text style={{height:"120px"}}><IoLocationSharp fontSize={"30"}/>Address<br/>Charents Street 9/40,Armavir,Armenia</Card.Text>
    </Card>
</Col>
            </Row>
    </Container>


        


</div>)

}