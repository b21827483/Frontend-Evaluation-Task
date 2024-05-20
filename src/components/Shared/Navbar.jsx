import {Container} from "@mui/material";
import TabsNavbar from "./UI/TabsNavbar";
import LogoButton from "./UI/LogoButton";
import AddUserButton from "./UI/AddUserButton";

function Navbar(props) {
    
    return (
        <Container sx={{display:"flex", 
                        alignItems: "center", 
                        position: "sticky", 
                        height: "80px", 
                        backgroundColor: "white", 
                        width: "100%", 
                        p: "20px"}} disableGutters maxWidth={false}
                        >
            <Container sx={{display:"flex", alignItems: "center", justifyContent: "space-between"}} disableGutters maxWidth={false}>
                <Container sx={{display:"flex", alignItems: "center", m:0, '@media (max-width: 800px)': {display: "none"}}} disableGutters maxWidth={false}>
                    <LogoButton />
                </Container>
                <Container sx={{position: "relative", top: "17px"}} disableGutters maxWidth={false}>
                    <TabsNavbar setFilterByRole={props.setFilterByRole} />
                </Container>
                <Container sx={{display: "flex", justifyContent: "flex-end"}} disableGutters maxWidth={false}>
                    <AddUserButton />
                </Container>
            </Container>
        </Container>
    )
}

export default Navbar