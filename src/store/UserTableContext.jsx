import { createContext, useState, useMemo } from "react";
import axios from "axios";

export const UserTableContext = createContext();

function UserTableProvider({children}) {
    const [page, setPage] = useState(0);
    const [selected, setSelected] = useState([]);
    const [allUsers, setAllUsers] = useState([]);
    const [users, setUsers] = useState([]);
    
    const getAllUsers = async () => {
        const response = await axios("https://663f77dae3a7c3218a4d2577.mockapi.io/api/users");
        setAllUsers(response.data); 
    }

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
        const newSelected = users.map(n => n.id);
        setSelected(newSelected);
        return;
        }
        setSelected([]);
    };

    const handleClick = (event, id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
            selected.slice(0, selectedIndex),
            selected.slice(selectedIndex + 1),
        );
        }
        setSelected(newSelected);
    };
    
    const totalPageNum = useMemo(() => {
        
        if ((users.length % 10) !== 0) {
        return parseInt(users.length / 10) + 1
        }
        else {
        return parseInt(users.length / 10)
        }
    },[users]);

    const visibleRows = useMemo(() => 
        users.slice(page * 10, page * 10 + 10), [users, page],
    );

    const changePageHandler = (event, newPage) => {
        setPage(newPage - 1);
    };

    const deleteSelectedHandler = async (event) => {
        if (selected.length === 0) {
            window.alert("You didn't select any user.");
        } else {
            if (window.confirm("Do you want to delete the selected users?")) {
                    for (const id of selected) {
                        console.log(id)
                        await axios.delete(`https://663f77dae3a7c3218a4d2577.mockapi.io/api/users/${id}`);
                };
            }
            getAllUsers();
        }
    }

    return (
        <UserTableContext.Provider value={{page, selected, allUsers, users, visibleRows, totalPageNum, setAllUsers, setUsers,
                                           handleClick, changePageHandler, handleSelectAllClick, deleteSelectedHandler, getAllUsers
        }}>
            {children}
        </UserTableContext.Provider>
    )
}

export default UserTableProvider