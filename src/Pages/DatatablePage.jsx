import { useState, useContext } from "react";
import { Container } from "@mui/material";
import Navbar from "../components/Shared/Navbar";
import Line from "../components/Shared/UI/Line";
import SearchBar from "../components/Shared/SearchBar";
import UserTable from "../components/UserTable/UserTable";
import UserFormPage from "./UserFormPage"
import { UserFormContext } from "../store/UserFormContext";

function DatatablePage() {
    const [isFormShown, setFormShown] = useState(false);
    const [filterByRole, setFilterByRole] = useState(0);

    const {resetFormHandler} = useContext(UserFormContext);

    const showFormHandler = () => {
        setFormShown(true);
    }

    const hideFormHandler = () => {
        setFormShown(false);
        resetFormHandler();
    }
    
    return (
        <Container sx={{width: "100%"}} disableGutters maxWidth={false}>
            {isFormShown && <Container> <UserFormPage onHideForm={hideFormHandler} /> </Container>}
            <Navbar onShowForm={showFormHandler} setFilterByRole={setFilterByRole} />
            <Line />
            <SearchBar />
            <UserTable filterByRole={filterByRole} />
        </Container>
    )
}

export default DatatablePage