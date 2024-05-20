import { useState, useMemo, useEffect, useContext } from "react";
import { Box, Table, TableContainer, Pagination } from "@mui/material";
import axios from "axios";
import UserTableHeader from "./UserTableHeader";
import UserTableRow from "./UserTableRow";
import { UserTableContext } from "../../store/UserTableContext";

function UserTable(props) {
  const {allUsers, page, totalPageNum, changePageHandler, setUsers, setAllUsers} = useContext(UserTableContext);
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

  return (
    <Box sx={{ width: '100%' }}>
      <TableContainer>
        <Table
          sx={{'& .MuiTableCell-head':{ lineHeight: "46px", py: 0 }  }}
          size='medium'
        >
          <UserTableHeader/>
          <UserTableRow/>
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