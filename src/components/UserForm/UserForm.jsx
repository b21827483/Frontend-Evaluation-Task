import { useContext, useState } from "react";
import { UserFormContext } from "../../store/UserFormContext";
import axios from "axios";
import UserFormAvatars from "./UserFormAvatars";
import UserFormButton from "./UserFormButton";
import UserFormInputs from "./UserFormInputs";
import UserFormRoles from "./UserFormRoles";
import UserFormSnackbar from "./UserFormSnackbar";

function UserForm() {
    const {name, username, email, role, targetAvatar, openSnackbarHandler, openSnackbar} = useContext(UserFormContext);
    const [message, setMessage] = useState("");
    const [bgdColor, setBgColor] = useState(null);

    const userFormSubmitHandler = async (event) => {
        event.preventDefault();

        if (!name || name.trim() === "" ||
            !username || username.trim() === "" ||
            !email || email.trim() === "" ||
            !role || role === "" ||
            !targetAvatar || targetAvatar === null) {
                setBgColor({backgroundColor:"red"});
                setMessage("Invalid inputs.");
                openSnackbarHandler();
                return;
            }

        try {
            await axios.post("https://663f77dae3a7c3218a4d2577.mockapi.io/api/users", {
                name: name,
                username: username,
                email: email,
                role: role,
                avatar: targetAvatar.src
            });
            setBgColor({backgroundColor:"green"});
            setMessage("User added successfully.");
            openSnackbarHandler();
            
        }
        catch (err) {
            setBgColor({backgroundColor:"red"});
            setMessage("Error occured.");
            openSnackbarHandler();
        }
    }

    return (
        <form onSubmit={userFormSubmitHandler}>
            {openSnackbar && <UserFormSnackbar message={message} backgroundColor={bgdColor} />}
            <UserFormInputs />
            <UserFormRoles />
            <UserFormAvatars />
            <UserFormButton />
        </form>
    )
}

export default UserForm