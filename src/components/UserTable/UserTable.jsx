import { useState, useMemo } from "react";
import { Box, Table, TableContainer, TableBody, TableRow, TableCell, TablePagination, Checkbox, Pagination } from "@mui/material";
import UserTableHeader from "./UserTableHeader";
import { rows } from "../../dummyData";
import UserTableRow from "./UserTableRow";

function UserTable() {
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState([]);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map(n => n.id);
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
    if (rows.length !== 0) {
      return parseInt(rows.length / 10) + 1
    }
    else {
      return parseInt(rows.length / 10)
    }
  },[rows]);

  const visibleRows = useMemo(() => 
    rows.slice(page * 10, page * 10 + 10), [page, 10],
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
            rowCount={rows.length}
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