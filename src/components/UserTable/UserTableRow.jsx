import { TableBody, TableRow, TableCell, Checkbox } from "@mui/material";

function UserTableRow({visibleRows, handleClick, selected}) {
    const isSelected = id => selected.indexOf(id) !== -1;
    const cellStyle={height: "42px",py:"24px",}
    
    return (
        <TableBody>
            {visibleRows.map(user => {
            const isItemSelected = isSelected(user.id);

            return (
              <TableRow
                key={user.id}
                sx={{width: "100%", cursor: 'pointer'}}
                hover
                onClick={(event) => handleClick(event, user.id)}
                role="checkbox"
                selected={isItemSelected}
              >
                <TableCell sx={cellStyle} padding="checkbox">
                  <Checkbox
                    color="primary"
                    checked={isItemSelected}
                  />
                </TableCell>
                <TableCell  sx={{height: "50px",py:"24px",width: "50px"}} align="left">
                  <img src={user.avatar} style={{borderRadius: "5px"}} height={50} width={50}/>
                </TableCell>
                <TableCell sx={{height: "42px",py:"24px",minWidth: "250px", fontSize:"12px", fontWeight:"600", color:"#3A3C40"}} align="left">
                  {user.name}</TableCell>
                <TableCell sx={{height: "42px",py:"24px",minWidth: "280px"}} align="left">{user.username}</TableCell>
                <TableCell sx={{height: "42px",py:"24px",minWidth: "300px"}} align="left">{user.email}</TableCell>
                <TableCell sx={{height: "42px",py:"24px",minWidth: "270px"}} align="left">{user.role}</TableCell>
                <TableCell sx={{height: "42px",py:"24px",minWidth: "80px"}} align="left">
                  <svg width="73" height="32" viewBox="0 0 73 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.5687 4.80068C24.048 4.27998 23.2037 4.27998 22.6831 4.80068L20.7975 6.68629L26.4543 12.3431L28.3399 10.4575C28.8605 9.93684 28.8605 9.09261 28.3399 8.57192L24.5687 4.80068ZM24.5687 14.2288L18.9117 8.57192L7.04579 20.4379C6.79574 20.688 6.65527 21.0271 6.65527 21.3807V25.152C6.65526 25.8884 7.25222 26.4853 7.98861 26.4853H11.7598C12.1135 26.4853 12.4526 26.3448 12.7026 26.0948L24.5687 14.2288Z" fill="#82868C"/>
                    <path d="M48.75 25.3333C48.75 26.8067 49.9434 28 51.4167 28H62.0834C63.5567 28 64.75 26.8067 64.75 25.3333V9.33333H48.75V25.3333ZM66.0834 5.33333H61.4167L60.0834 4H53.4167L52.0834 5.33333H47.4167V8H66.0834V5.33333Z" fill="#82868C"/>
                  </svg>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
    )
}

export default UserTableRow