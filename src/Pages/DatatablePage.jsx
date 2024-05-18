import { useState } from "react";
import { Container } from "@mui/material";
import Navbar from "../components/Shared/Navbar";
import Line from "../components/Shared/UI/Line";
import SearchBar from "../components/Shared/SearchBar";
import UserTable from "../components/UserTable/UserTable";
import UserFormPage from "./UserFormPage"

function DatatablePage() {
    const [isFormShown, setFormShown] = useState(false);

    const showFormHandler = () => {
        setFormShown(true);
    }

    const hideFormHandler = () => {
        setFormShown(false);
    }
    
    return (
        <Container sx={{width: "100%"}} disableGutters maxWidth={false}>
            {isFormShown && <Container> <UserFormPage onHideForm={hideFormHandler} /> </Container>}
            <Navbar onShowForm={showFormHandler} />
            <Line />
            <SearchBar />
            <UserTable />
        </Container>
    )
}

export default DatatablePage