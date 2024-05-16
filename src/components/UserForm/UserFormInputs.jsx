import { Container, Input } from "@mui/material";
import { useState } from "react"

function UserFormInputs() {
    
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");

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
                   onChange={(e) => {setName(e.target.value)}}
                   placeholder="Full Name"
                   disableUnderline />
            <Input sx={inputStyle}
                   id="username" 
                   value={username}
                   onChange={(e) => {setUsername(e.target.value)}}
                   placeholder="Username"
                   disableUnderline/>
            <Input sx={inputStyle}
                   id="email" 
                   value={email}
                   onChange={(e) => {setEmail(e.target.value)}}
                   placeholder="Email Address"
                   disableUnderline/>
        </Container>
    )
}

export default UserFormInputs