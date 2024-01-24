import React,{useEffect,useState} from "react";
import { Container, Row,Col } from "react-bootstrap";
import ScrollToTop from "react-scroll-to-top";
import data from "../data/data";
import { BsBrush } from "react-icons/bs";
import { BsFillPhoneFill } from "react-icons/bs";
import { BsCodeSlash } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "../About/About.css"




export default function About(){
  
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

  return(
        <div className="About" style={{background: "none"}}>
           
           <div className="progressmainstyle" style={{width:`${scrollTop}%`,height:"4px",background:"blue"}}></div>
      <Container>
      <ScrollToTop top={40} />
          <main>
            <Row className="d-flex  justify-content-center"  >
                <h2>ABOUT ME</h2>
                 
                <br/>
                <br/>
                <Col md style={{width:"300px",height:"400px"}}>
                <img  style={{width:"100%",height:"100%"}} src="https://wallpaperaccess.com/full/2213449.jpg" class="img-fluid" alt="..."/>
                </Col>
                
                
                <Col md style={{width:"300px",height:"max-content",}}>
                <h1 style={{color:"ghostwhite"}}>I am Poghos Qamalyan</h1>
          <br />
          <p  style={{ color: "gainsboro"}}>
            I am a frontend web developer. I can provide clean code and pixel
            perfect design. I also make website more & more interactive with web
            animations.
          </p>
          <h5  style={{ color: "gainsboro"}}>{data.david.FullName}</h5>
          <h5  style={{ color: "gainsboro"}}>{data.david.Age}</h5>
          <h5  style={{ color: "gainsboro"}}>{data.david.Nationality}</h5>
          <h5  style={{ color: "gainsboro"}}>{data.david.Languages}</h5>
          <h5  style={{ color: "gainsboro"}}>{data.david.Address}</h5>
          <h5  style={{ color: "gainsboro"}}>{data.david.Freelance}</h5>
                </Col>
            </Row>

            <Row  className=" d-flex  justify-content-center  align-items-center" style={{height:"max-content",marginTop:"180px"}}>
             
                <h2>Services</h2>
                <br/>
                <br/>
                <br/>
                <Col className="box" md style={{width:"100%",height:"max-content",borderRight:"1px solid"}}>
                <span>
                  <BsBrush 
                  style={{fontSize:"40px",color:"#037fff"}}
                  />
                                  <br/>
                <br/>
                  <h4>Web Design</h4>
                  <br/>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ea porro consequatur perspiciatis, quasi nemo provident consectetur aut autem doloribus!</p>
                  </span>
                </Col>
                
                
                
                
                <Col md style={{width:"100%",height:"max-content",borderRight:"1px solid"}}>
                  <BsCodeSlash
                  style={{fontSize:"40px",color:'#037fff'}}
                  />
                                  <br/>
                  <br/>
                  <h4>Web Deweloper</h4>
                  <br/>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore quidem explicabo tempora necessitatibus quo, rerum velit fugiat fugit non facilis.</p>
                </Col>
                
                
                
                <Col md style={{width:"100%",height:"max-content"}}>

                            <BsFillPhoneFill
                   style={{fontSize:"40px",color:'#037fff'}}
                   />
                <br/>
                                    <br/>
                  <h4>Mobile Aplication</h4>
                  <br/>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero eligendi laboriosam animi eaque, nulla odit ab eum amet perspiciatis sint.</p>
                </Col>
            </Row>
            <br/>
            <br/>
            <Row>
              <Col md>
              <Swiper style={{width:"100%",display:"flex",flexWrap:"wrap",justifyContent:"space-around",alignItems:"center"}} 
      spaceBetween={10}
      
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide style={{width:"209px",height:"max-content",borderRight:"1px solid black"}}  ><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione iusto illum rerum.<br/><br/><span>Susan Yost</span><br/><span>Client</span></p></SwiperSlide>
      <SwiperSlide style={{width:"209px",height:"max-content",borderRight:"1px solid black"}}><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione iusto illum rerum. <br/><br/><span>Irving Feeney</span><br/><span>Web Deweloper, ABC Company</span></p></SwiperSlide>
      <SwiperSlide style={{width:"209px",height:"max-content",borderRight:"1px solid black"}}><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione iusto illum rerum.<br/><br/><span>Burgette Turney</span><br/><span>Fiverr Client</span></p></SwiperSlide>
      <SwiperSlide style={{width:"209px",height:"max-content",borderRight:"1px solid black"}}><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione iusto illum rerum. <br/><br/><span>Irving Feeney</span><br/><span>Web Deweloper, ABC Company</span></p></SwiperSlide>
      ...
    </Swiper>
              </Col>
            </Row>
            </main>
          </Container>
            {/* <div className="box">
              <span></span>
            </div> */}
        </div>
    )
}