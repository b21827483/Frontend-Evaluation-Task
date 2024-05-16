import { FormControl} from "@mui/material";
import UserFormAvatars from "./UserFormAvatars";
import UserFormButton from "./UserFormButton";
import UserFormInputs from "./UserFormInputs";
import UserFormRoles from "./UserFormRoles";


function UserForm() {

    return (
        <FormControl sx={{position:"fixed",
                          zIndex: 20,    
                          backgroundColor: "white",
                          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
                          top: "10vh",
                          left: "40%",
                         display:"flex", 
                         flexDirection:"column", 
                         height:"556px", 
                         width:"290px", 
                         borderRadius: "10px",
                         pt:"32px",
                         pb:"18px",
                         pl:"29px", 
                         pr:"35px"}}
                         >
            <UserFormInputs />
            <UserFormRoles />
            <UserFormAvatars />
            <UserFormButton />
        </FormControl>
    )
}

export default UserForm