import { Button, Typography } from "@mui/material"
import { useContext } from "react"
import { UserFormContext } from "../../../store/UserFormContext";

function AddUserButton() {
    const {showFormHandler} = useContext(UserFormContext);

    return (
        <Button variant="contained" onClick={showFormHandler} sx={{display: "flex",
                                        alignItems: "center", 
                                        height: "40px", 
                                        py: "12px", 
                                        pr: "20px", 
                                        pl: "15px", 
                                        gap: "10px", 
                                        borderRadius: "4px", 
                                        backgroundColor: "#2940D3" }}
                                        >
            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.0576 4.63523C12.3853 3.52928 11.3774 2.624 10.1982 2.0908C8.93701 1.52097 7.52344 1.3613 6.16699 1.63816C4.88818 1.8989 3.6958 2.56687 2.79492 3.51023C1.88965 4.45799 1.27588 5.6782 1.07666 6.97459C1.02393 7.3159 0.996094 7.66014 0.996094 8.00584C0.996094 9.34325 1.40918 10.6733 2.18848 11.7617C2.95898 12.8384 4.03272 13.6631 5.27637 14.1201C6.55078 14.5874 7.979 14.6328 9.28271 14.2607C10.5322 13.9033 11.6719 13.1621 12.498 12.1572C13.355 11.1172 13.8721 9.84276 13.9775 8.49803C14.0845 7.15623 13.7563 5.78514 13.0576 4.63523ZM9.93457 8.43944H7.93945V10.4477C7.93945 10.6938 7.7373 10.8769 7.5 10.8872C7.2627 10.8974 7.06055 10.6777 7.06055 10.4477V8.43944H5.05371C4.80762 8.43944 4.62451 8.23729 4.61426 7.99998C4.604 7.76268 4.82373 7.56053 5.05371 7.56053H7.06055V5.56541C7.06055 5.31932 7.2627 5.13621 7.5 5.12596C7.7373 5.1157 7.93945 5.33543 7.93945 5.56541V7.56053H9.93457C10.1807 7.56053 10.3638 7.76268 10.374 7.99998C10.3843 8.23729 10.1646 8.43944 9.93457 8.43944Z" fill="white"/>
            </svg>
            <Typography sx={{fontSize: "13px", lineHeight: "15.85px", textTransform: "none"}}>Add New User</Typography>
        </Button>
    )
}

export default AddUserButton