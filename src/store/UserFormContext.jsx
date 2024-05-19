import { createContext, useState } from "react";

export const UserFormContext = createContext();

const UserFormProvider = ({children}) => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");
    const [targetAvatar, setTargetAvatar] = useState(null); 
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const openSnackbarHandler = () => {
        setOpenSnackbar(true);
    };

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
        const avatarImg = event.target;

        if (targetAvatar === null) {    
            setTargetAvatar(avatarImg);
            avatarImg.style.boxShadow = "0 0 2px 2px blue";
            console.log(avatarImg.src)
        }
        else if (targetAvatar !== avatarImg) {
            targetAvatar.style.boxShadow = "";
            setTargetAvatar(avatarImg);
            avatarImg.style.boxShadow = "0 0 2px 2px blue";
            
            console.log(avatarImg.src)
        }
    }

    const resetFormHandler = () => {
        setName("");
        setUsername("");
        setEmail("");
        setRole("");
        setTargetAvatar(null);
    }

    return (
        <UserFormContext.Provider value={{name, username, email, role, targetAvatar, openSnackbar, 
                                         changeNameHandler, changeUsernameHandler, changeEmailHandler , changeRoleHandler, onSelectAvatar,
                                         resetFormHandler, openSnackbarHandler, closeSnackbarHandler}}
                                         >
            {children}
        </UserFormContext.Provider>
    )
}

export default UserFormProvider;