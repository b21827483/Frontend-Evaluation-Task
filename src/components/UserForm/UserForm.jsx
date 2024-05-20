import { useContext, useState } from "react";
import { UserFormContext } from "../../store/UserFormContext";
import axios from "axios";
import UserFormAvatars from "./UserFormAvatars";
import UserFormButton from "./UserFormButton";
import UserFormInputs from "./UserFormInputs";
import UserFormRoles from "./UserFormRoles";
import UserFormSnackbar from "./UserFormSnackbar";
import { UserTableContext } from "../../store/UserTableContext";

function UserForm() {
    const {id, name, username, email, role, targetAvatar, openSnackbarHandler, openSnackbar, hideFormHandler} = useContext(UserFormContext);
    const {getAllUsers} = useContext(UserTableContext);
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
            // Update existing user
            if (id !== null) {
                await axios.put(`https://663f77dae3a7c3218a4d2577.mockapi.io/api/users/${id}`, {
                    name: name,
                    username: username,
                    email: email,
                    role: role,
                    avatar: targetAvatar.src
                });
                setMessage("User updated successfully.");

            // Create new User    
            } else {
                await axios.post("https://663f77dae3a7c3218a4d2577.mockapi.io/api/users", {
                    name: name,
                    username: username,
                    email: email,
                    role: role,
                    avatar: targetAvatar.src
                });
                setMessage("User added successfully.");
            }
            setBgColor({backgroundColor:"green"});
            openSnackbarHandler();
            setTimeout(() => {
                hideFormHandler()
            }, "2000");
            getAllUsers();
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