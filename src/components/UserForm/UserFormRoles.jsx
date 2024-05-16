import { useState } from "react";
import { FormControl, InputLabel, Select, List, MenuItem } from "@mui/material";
import Line from "../Shared/UI/Line";

const roles = [
    {label: "Contributor"}, {label: "Subscriber"}, {label: "Author"}, {label: "Administrator"}, 
]

function UserFormRoles() {
    const [role, setRole] = useState("");

    const handleChange = (event) => {
        setRole(event.target.value);
    };

    return (
        <FormControl sx={{mb:"30px"}} fullWidth>
            <InputLabel id="role-label">Role</InputLabel>
            <Select
                labelId="role-label"
                id="select-role"
                value={role}
                label="Role"
                onChange={handleChange}
            >
                {roles.map(role => (
                    <List>    
                        <MenuItem key={role.label} value={role.label} sx={{height:"12px", py:"4px", fontSize:"10px", fontWeight:"600",  color:"#3A3C40"}}>
                            {role.label}
                        </MenuItem>
                        <Line />
                    </List>
                ))}
            </Select>
        </FormControl>
    )
}

export default UserFormRoles