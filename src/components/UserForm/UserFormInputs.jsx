import { Container, Input } from "@mui/material";
import { useContext } from "react";
import { UserFormContext } from "../../store/UserFormContext";

function UserFormInputs() {
    const {name, username, email, changeNameHandler, changeUsernameHandler, changeEmailHandler} = useContext(UserFormContext);

    const inputStyle = {width:"100%",
                        border: "2px solid #E3E6EB",
                        borderRadius:"8px",
                        mb:"30px",  
                        padding:"10px 10px 10px 15px",
                        fontWeight:"500",
                        fontSize:"13px",
                        color:"black"};

    return (
        <Container disableGutters>
            <Input sx={inputStyle}
                   id="name" 
                   value={name}
                   onChange={changeNameHandler}
                   placeholder="Full Name"
                   disableUnderline />
            <Input sx={inputStyle}
                   id="username" 
                   value={username}
                   onChange={changeUsernameHandler}
                   placeholder="Username"
                   disableUnderline/>
            <Input sx={inputStyle}
                   id="email" 
                   type="email"
                   value={email}
                   onChange={changeEmailHandler}
                   placeholder="Email Address"
                   disableUnderline/>
        </Container>
    )
}

export default UserFormInputs