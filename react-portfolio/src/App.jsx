import React, { useState,useEffect } from 'react';
import "../src/App.css"
import { Container } from 'react-bootstrap';
import ScaleLoader from "react-spinners/ScaleLoader";
import Menu from './Components/Menu/Menu';
import Appp from './Components/Appp';

 
export default function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 0);
  }, []);
  return (
    <Container>

      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            background: "aliceblue",
            width: "100%",
            height: "713px",
          }}
        >
          {" "}
          <ScaleLoader color={"blue"} loading={loading} size={200} />
        </div>
      ) : (
        <Menu />
        
      )}
     
    </Container>)
}



