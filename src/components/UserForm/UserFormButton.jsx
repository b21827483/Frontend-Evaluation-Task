import { Container, Button, Typography } from "@mui/material"

function UserFormButton() {
    return (
        <Container sx={{display:"flex",
                        justifyContent:"center",
                        alignContent:"center"}} disableGutters>
            <Button sx={{display:"flex",
                    justifyContent:"center", 
                    width:"124px",
                    height:"38px",
                    backgroundColor:"#2940D3",
                    borderRadius: "4px",
                    paddign:"15px 20px 15px 20px",
                    mt:"26px"}} 
                variant="contained"
                type="submit">
                <Typography sx={{fontSize: "13px", lineHeight: "15.85px", textTransform: "none"}}>
                    Create User
                </Typography>
            </Button>          
        </Container>
    )
}

export default UserFormButton