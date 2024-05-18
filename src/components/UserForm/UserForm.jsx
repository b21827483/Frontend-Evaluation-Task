import { FormControl} from "@mui/material";
import UserFormAvatars from "./UserFormAvatars";
import UserFormButton from "./UserFormButton";
import UserFormInputs from "./UserFormInputs";
import UserFormRoles from "./UserFormRoles";


function UserForm() {

    return (
        <FormControl 
                         >
            <UserFormInputs />
            <UserFormRoles />
            <UserFormAvatars />
            <UserFormButton />
        </FormControl>
    )
}

export default UserForm