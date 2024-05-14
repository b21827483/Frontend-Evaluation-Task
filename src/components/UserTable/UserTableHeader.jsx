import { TableHead, TableRow, TableCell, Checkbox} from "@mui/material";

const headers = [
    {
      id: 'avatar',
      numeric: false,
      label: 'Avatar',
    },
    {
      id: 'name',
      numeric: false,
      label: 'Name',
    },
    {
      id: 'username',
      numeric: false,
      label: 'Username',
    },
    {
      id: 'email',
      numeric: false,
      label: 'Email',
    },
    {
      id: 'role',
      numeric: false,
      label: 'Role',
    },
    {
      id: 'edit',
      numeric: false,
      label: 'Edit',}
  ];

function UserTableHeader(props) {
    const { onSelectAllClick, numSelected, rowCount} = props;
  
    return (
      <TableHead sx={{backgroundColor: "#F5F5F7"}}>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              color="primary"
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={rowCount > 0 && numSelected === rowCount}
              onChange={onSelectAllClick}
            />
          </TableCell>
          {headers.map(header => 
            <TableCell
              sx={{height:"46px",
              fontWeight:"600",
              fontSize:"12px",  
              lineHeight:"14.63px"}}
              key={header.id}
              align="left">
                {header.label}
            </TableCell>
            )}
        </TableRow>
      </TableHead>
    );
  }

  export default UserTableHeader