import axios from "axios";
import { createContext, useState } from "react";

export const UserFormContext = createContext();

const UserFormProvider = ({children}) => {
    const [id, setId] = useState(null);
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [targetAvatar, setTargetAvatar] = useState(null); 
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [isFormShown, setFormShown] = useState(false);
    
    const showFormHandler = (event, id = null) => {
        if (id !== null) {
            const getUserHandler = async () => {
                await axios.get(`https://663f77dae3a7c3218a4d2577.mockapi.io/api/users/${id}`).
                    then(response => {
                        const userInfo = response.data;
                        setId(userInfo.id);
                        setName(userInfo.name);
                        setUsername(userInfo.username);
                        setEmail(userInfo.email);
                        setRole(userInfo.role);
                        const img = document.getElementById(userInfo.avatar);
                        setTargetAvatar(img);
                        onSelectAvatar(img)
                    }).catch(err => {
                        console.log(err)
                    });
            }
            getUserHandler();
        }
        setFormShown(true);
    }

    const hideFormHandler = () => {
        setFormShown(false);
        resetFormHandler();
    }

    const closeSnackbarHandler = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpenSnackbar(false);
    };

    const changeNameHandler = (event) => {
        setName(event.target.value);
    }

    const changeUsernameHandler = (event) => {
        setUsername(event.target.value);
    }

    const changeEmailHandler = (event) => {
        setEmail(event.target.value);
    }
    
    const changeRoleHandler = (event) => {
        setRole(event.target.value);
    };
    
    const onSelectAvatar = (event) => {
        if (event.target === undefined || event.target === null) {
            event.style.boxShadow = "0 0 2px 2px blue";
            return;
        }
        const avatarImg = event.target;

        if (targetAvatar === null) {    
            setTargetAvatar(avatarImg);
            avatarImg.style.boxShadow = "0 0 2px 2px blue";
        }
        else if (targetAvatar !== avatarImg) {
            targetAvatar.style.boxShadow = "";
            setTargetAvatar(avatarImg);
            avatarImg.style.boxShadow = "0 0 2px 2px blue";
        }
    }
    
    const openSnackbarHandler = () => {
        setOpenSnackbar(true);
    };

    const resetFormHandler = () => {
        setId(null);
        setName("");
        setUsername("");
        setEmail("");
        setRole("");
        setTargetAvatar(null);
    }

    return (
        <UserFormContext.Provider value={{id, name, username, email, role, targetAvatar, openSnackbar, isFormShown,
                                         changeNameHandler, changeUsernameHandler, changeEmailHandler , changeRoleHandler, onSelectAvatar,
                                         resetFormHandler, openSnackbarHandler, closeSnackbarHandler, showFormHandler, hideFormHandler}}
                                         >
            {children}
        </UserFormContext.Provider>
    )
}

export default UserFormProvider;