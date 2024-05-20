import { Button, Container, TextField, Typography } from "@mui/material";
import { useContext } from "react";
import { UserTableContext } from "../../store/UserTableContext";

function SearchBar() {

    const {deleteSelectedHandler} = useContext(UserTableContext);

    return (
        <Container sx={{display: "flex",justifyContent:"space-between",alignItems:"center",width: "100%", height:"40px", px: "20px", py: "30px"}} disableGutters maxWidth={false}>
            <Container sx={{display: "flex", alignItems:"center", gap: "12px",}} disableGutters maxWidth={false}>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.5358 24.3631L20.8863 19.7131C22.3953 17.9015 23.1478 15.5779 22.9874 13.2256C22.8269 10.8732 21.7658 8.67331 20.0248 7.08349C18.2839 5.49367 15.997 4.63634 13.6401 4.68986C11.2832 4.74339 9.0376 5.70364 7.37057 7.37086C5.70353 9.03808 4.74338 11.2839 4.68986 13.6411C4.63634 15.9983 5.49358 18.2854 7.08323 20.0265C8.67287 21.7677 10.8725 22.8289 13.2246 22.9894C15.5767 23.1498 17.9001 22.3972 19.7114 20.8881L24.361 25.5381C24.5168 25.6938 24.7281 25.7812 24.9484 25.7812C25.1687 25.7812 25.38 25.6938 25.5358 25.5381C25.6136 25.4613 25.6753 25.3698 25.7174 25.269C25.7596 25.1681 25.7812 25.0599 25.7812 24.9506C25.7812 24.8413 25.7596 24.7331 25.7174 24.6323C25.6753 24.5314 25.6136 24.4399 25.5358 24.3631ZM6.38346 13.8659C6.37964 12.6346 6.67973 11.4214 7.25709 10.3338C7.83446 9.24634 8.67125 8.31813 9.69327 7.63157C10.7153 6.94501 11.8909 6.52131 13.1159 6.39805C14.3409 6.27479 15.5773 6.45578 16.7156 6.92498C17.8539 7.39417 18.8588 8.13705 19.6412 9.08774C20.4236 10.0384 20.9593 11.1675 21.2008 12.3749C21.4424 13.5823 21.3822 14.8306 21.0257 16.0092C20.6692 17.1877 20.0274 18.2601 19.1572 19.1311C18.1136 20.1795 16.7825 20.8947 15.3324 21.1862C13.8822 21.4776 12.3782 21.3323 11.0106 20.7686C9.64305 20.2049 8.47342 19.2482 7.64975 18.0194C6.82609 16.7907 6.3854 15.3452 6.38346 13.8659Z" fill="#82868C"/>
                </svg>
                <TextField sx={{"& fieldset": { border: 'none', width: "100%" }}}
                           inputProps={{style: {fontSize: "13px", width: "100%" }}} 
                           id="searchbar" placeholder="Search..." fullWidth />
            </Container>
            <Button onClick={deleteSelectedHandler}  sx={{display: "flex", alignItems: "center", height: "30px", gap: "10px"}}>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.5 23.75C7.5 25.1313 8.61875 26.25 10 26.25H20C21.3813 26.25 22.5 25.1313 22.5 23.75V8.75H7.5V23.75ZM23.75 5H19.375L18.125 3.75H11.875L10.625 5H6.25V7.5H23.75V5Z" fill="#82868C"/>
                    </svg>
                    <Typography sx={{textTransform: "none", color: "#82868C"}}>Delete</Typography>
                </Button>
        </Container>
    )
}

export default SearchBar;