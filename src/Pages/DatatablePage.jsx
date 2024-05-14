import { Container } from "@mui/material";
import Navbar from "../components/Shared/Navbar";
import Line from "../components/Shared/UI/Line";
import SearchBar from "../components/Shared/SearchBar";
import TableValues from "../components/Shared/UI/TableHeaders";
import UserTable from "../components/UserTable/UserTable";

function DatatablePage() {
    
    return (
        <Container sx={{width: "100%"}} disableGutters maxWidth={false}>
            <Navbar />
            <Line />
            <SearchBar />
            <UserTable />
        </Container>
    )
}

export default DatatablePage