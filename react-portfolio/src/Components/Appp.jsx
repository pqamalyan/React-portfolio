import "../App.css"
import styled, {ThemeProvider} from "styled-components"
import { lightTheme,darkTheme, GlobalStyles  } from "./themes"
import React,{useState} from "react"



const StyledApp=styled.div `
color: ${(props)=>props.theme.fontColor}
`;
function Appp() {
    const [theme,setTheme] =useState("light")

    const themeToggler = () =>{
        theme==="light"?setTheme("dark"):setTheme("light")
    }
    return(
        <ThemeProvider theme={theme==="light"?lightTheme:darkTheme}>
            <GlobalStyles/>
            <StyledApp style={{width:"600px",height:"600px"}}></StyledApp>
            <button onClick={() => themeToggler()}>change</button>
        </ThemeProvider>
    )
}
export default Appp
