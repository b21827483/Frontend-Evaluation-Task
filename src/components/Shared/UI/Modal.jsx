import { Fragment } from "react";
import ReactDOM from "react-dom"
import { Container } from "@mui/material"

function Backdrop(props) {
    return <Container sx={{position:"fixed", top:0, left:0, width: "100%", height: "100vh", zIndex: 15, backgroundColor:"rgba(0, 0, 0, 0.75)"}}
                   disableGutters
                   maxWidth={false}
                   onClick={props.onHideForm} />
}

function ModalOverlay(props) {
    return <Container sx={{position:"fixed",
                          zIndex: 20,    
                          backgroundColor: "white",
                          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
                          top: "10vh",
                          left: "40%",
                         display:"flex", 
                         flexDirection:"column", 
                         height:"556px", 
                         width:"340px", 
                         borderRadius: "10px",
                         pt:"32px",
                         pb:"18px",
                         pl:"29px", 
                         pr:"35px"}} >
        {props.children}
    </Container>
}

const portal = document.getElementById("userform");

export default function Modal(props) {
    return <Fragment>
        {ReactDOM.createPortal(<Backdrop onHideForm={props.onHideForm} />, portal)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portal)}

    </Fragment>
}

