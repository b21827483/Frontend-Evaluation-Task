import { useContext } from "react";
import { FormControl, InputLabel, Select, List, MenuItem, Container } from "@mui/material";
import Line from "../Shared/UI/Line";
import { UserFormContext } from "../../store/UserFormContext";

const roles = [
    {label: "Contributor"}, {label: "Subscriber"}, {label: "Author"}, {label: "Adminstrator"}, 
]

function UserFormRoles() {
    const {role, changeRoleHandler} = useContext(UserFormContext);
    
    return (
        <FormControl sx={{mb:"30px"}} fullWidth>
            <InputLabel id="role-label">Role</InputLabel>
            <Select
                labelId="role-label"
                id="select-role"
                value={role}
                label="Role"
                onChange={changeRoleHandler}
            >
                {roles.map(roleElem => (
                <MenuItem key={roleElem.label} value={roleElem.label} sx={{height:"16px", py:"4px", fontSize:"10px", fontWeight:600,  color:"#3A3C40"}}>
                                {roleElem.label}
                </MenuItem>))}
            </Select>
        </FormControl>
    )
}

export default UserFormRoles