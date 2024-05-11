import { Container } from "@mui/material";
import Navbar from "../components/Shared/Navbar";
import Line from "../components/Shared/UI/Line";
import SearchBar from "../components/Shared/SearchBar";

function Datatable() {
    
    return (
        <Container sx={{width: "100%"}} disableGutters maxWidth={false}>
            <Navbar />
            <Line />
            <SearchBar />
        </Container>
    )
}

export default Datatable