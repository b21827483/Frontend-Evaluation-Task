import { useContext} from "react";
import { Snackbar } from "@mui/material";
import { UserFormContext } from "../../store/UserFormContext";

function UserFormSnackbar(props) {
  const {openSnackbar, closeSnackbarHandler} = useContext(UserFormContext);

  return (
    <div>
      <Snackbar
        ContentProps={{sx: props.backgroundColor}}
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={closeSnackbarHandler}
        message={props.message}
      />
    </div>
  );
}

export default UserFormSnackbar