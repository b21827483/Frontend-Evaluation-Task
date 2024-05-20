import { useState, useContext } from "react";
import { Container } from "@mui/material";
import Navbar from "../components/Shared/Navbar";
import Line from "../components/Shared/UI/Line";
import SearchBar from "../components/Shared/SearchBar";
import UserTable from "../components/UserTable/UserTable";
import UserFormPage from "./UserFormPage"
import { UserFormContext } from "../store/UserFormContext";

function DatatablePage() {
    const [filterByRole, setFilterByRole] = useState(0);

    const {isFormShown} = useContext(UserFormContext);

    return (
        <Container sx={{width: "100%"}} disableGutters maxWidth={false}>
            {isFormShown && <Container> <UserFormPage /> </Container>}
            <Navbar setFilterByRole={setFilterByRole} />
            <Line />
            <SearchBar filterByRole={filterByRole} />
            <UserTable filterByRole={filterByRole} />
        </Container>
    )
}

export default DatatablePage