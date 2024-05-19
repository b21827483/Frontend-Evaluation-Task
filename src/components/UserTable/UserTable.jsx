import { useState, useMemo, useEffect } from "react";
import { Box, Table, TableContainer, Pagination } from "@mui/material";
import axios, { all } from "axios";
import UserTableHeader from "./UserTableHeader";
import UserTableRow from "./UserTableRow";

function UserTable(props) {
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);

  const {filterByRole} = props;

  useEffect(() => {
    async function fetchUsers() {
      const response = await axios("https://663f77dae3a7c3218a4d2577.mockapi.io/api/users");
      setAllUsers(response.data);  
    }

    fetchUsers();
  }, []);

  useEffect(() => {
    if (filterByRole === 0){
      setUsers(allUsers);
    }
    else if(filterByRole === 1) {
      setUsers(allUsers.filter(user => user.role === "Contributor"))
    }
    else if(filterByRole === 2) {
      setUsers(allUsers.filter(user => user.role === "Author"))
    }
    else if(filterByRole === 3) {
      setUsers(allUsers.filter(user => user.role === "Adminstrator"))
    }
    else if(filterByRole === 4) {
      setUsers(allUsers.filter(user => user.role === "Subscriber"))
    }
  }, [filterByRole, allUsers])

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

  const changePageHandler = (event, newPage) => {
    setPage(newPage - 1);
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

  return (
    <Box sx={{ width: '100%' }}>
      <TableContainer>
        <Table
          sx={{'& .MuiTableCell-head':{ lineHeight: "46px", py: 0 }  }}
          size='medium'
        >
          <UserTableHeader
            numSelected={selected.length}
            onSelectAllClick={handleSelectAllClick}
            rowCount={users.length}
          />
          <UserTableRow visibleRows={visibleRows} selected={selected} handleClick={handleClick} />
        </Table>
      </TableContainer>
      <Box sx={{display: "flex", justifyContent: "center", alignItems: "center",height: "24px", py: "40px"}}>
        <Pagination
          defaultPage={0}
          shape="rounded"
          count={totalPageNum}
          page={page + 1}
          onChange={changePageHandler}
        />
      </Box>
    </Box>
  );
}

export default UserTable