import { Container } from "@mui/material";
import Navbar from "../components/Shared/Navbar";
import Line from "../components/Shared/UI/Line";
import SearchBar from "../components/Shared/SearchBar";
import TableValues from "../components/Shared/UI/TableHeaders";

function Datatable() {
    
    return (
        <Container sx={{width: "100%"}} disableGutters maxWidth={false}>
            <Navbar />
            <Line />
            <SearchBar />
            <TableValues />
        </Container>
    )
}

export default Datatable