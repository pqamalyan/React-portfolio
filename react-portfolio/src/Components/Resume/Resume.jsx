import React,{useEffect,useState} from "react"
import ScrollToTop from "react-scroll-to-top";
import { Container, Row,Col,ProgressBar } from "react-bootstrap";
import {BsFillBriefcaseFill} from "react-icons/bs"
import "./Resume.css"






export default function Resume(){

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

	
    return (<div className="Resume">
        
        <main>
        <div className="progressmainstyle" style={{width:`${scrollTop}%`,height:"4px" ,background:"blue"}}></div>
            <Container>
            <ScrollToTop top={40} />
                <Row className="d-flex justify-content-space-around">
                    <h2>MY SKILLS</h2>
                 <Col md> 
                 <label>HTML 5</label>
                 <ProgressBar animated label={"90%"} now={90} variant="info"  />
                 <br/>
                 <label>JavaScript</label>
                 <ProgressBar animated label={"60%"} now={60} variant="info"  />
                 <br/>
                 <label>React Js</label>
                 <ProgressBar animated label={"40%"} now={40} variant="info"  />
                 <br/>
                </Col>
                <Col md>
                <label>CSS</label>
                <ProgressBar animated label={"80%"} now={80} variant="info"  />
                 <br/>
                 <label>JQuery</label>
                 <ProgressBar animated label={"40%"} now={40} variant="info"  />
                 <br/>
                 <label>Photoshot</label>
                 <ProgressBar animated label={"50%"} now={50} variant="info"  />
                 <br/>
                </Col>
                </Row>
                <br/>


                <Row className="d-flex justify-content-center flex-wrap align-center overflow-hidden">
                    <h2>RESUME</h2>
                    <br/>
                    <br/>
                    <br/>

                    <h3><BsFillBriefcaseFill/> Working Experience</h3>
                    <Col  md={"3"} style={{width:"640px",height:"max-content",border:"1px solid",margin:"2px"}} > <h4>2018 - Present</h4> </Col>
                    <Col  md={"3"} style={{width:"640px",height:"max-content",margin:"2px",border:"1px solid"}} ><h3>Frontend Web Developer</h3><h4>Abc Company</h4><h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.</h5></Col>

                        <Col sm md={"3"} style={{width:"640px",height:"max-content",border:"1px solid",margin:"2px"}} > <h4>2018 - Present</h4> </Col>
                        <Col  md={"3"} style={{width:"640px",height:"max-content",margin:"2px",border:"1px solid"}} ><h3>Frontend Web Developer</h3><h4>CBA Company</h4><br/><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.</p></Col>
                        <Col md={"3"} style={{width:"640px",height:"max-content",border:"1px solid",margin:"2px"}} > <h4>2018 - Present</h4> </Col>
                        <Col md={"3"} style={{width:"640px",height:"max-content",margin:"2px",border:"1px solid"}} ><h3>UI/UX Designer</h3><h4>Example Company</h4><br/><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.</p></Col>
                   </Row>

                   <Row className="d-flex justify-content-center flex-wrap align-center">
                   <h2>Educational Qualifications</h2>
                    <br/>
                    <br/>
                    <br/>
                    <h3><BsFillBriefcaseFill/> Working Experience</h3>
                    <Col md={"3"} style={{width:"640px",height:"max-content",border:"1px solid",margin:"2px"}} > <h4>2018 - 2019</h4> </Col>
                    <Col md={"3"} style={{width:"640px",height:"max-content",margin:"2px",border:"1px solid"}} ><h3>Master of Science</h3><h4>Abc University</h4><br/><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.</p></Col>

                        <Col md={"3"} style={{width:"640px",height:"max-content",border:"1px solid",margin:"2px"}} > <h4>2016 - 2018</h4> </Col>
                    <Col md={"3"} style={{width:"640px",height:"max-content",border:"1px solid",margin:"2px"}} ><h3>Bachelor of Science</h3><h4>Abc University</h4><br/><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.</p></Col>
                        <Col md={"3"} style={{width:"640px",height:"max-content",border:"1px solid",margin:"2px"}} > <h4>2015 - 2016</h4> </Col>
                    <Col md={"3"} style={{width:"640px",height:"max-content",border:"1px solid",margin:"2px"}} ><h3>Higher Schoold Graduation</h3><h4>Abc College</h4><br/><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.</p></Col>


                   </Row>
            </Container>
        </main>
    </div>)
}