import { Container, Checkbox, Typography} from "@mui/material";

function TableValues() {

    return (
        <Container sx={{display: "flex", alignItems:"center", gap:"38px", height:"46px", backgroundColor: "#F5F5F7", px: "18px"}} disableGutters maxWidth={false}>
            <Container sx={{display:"flex",position: "relative", left: 0,justifyContent:"flex-start" ,alignItems: "center", minWidth: "84px"}} disableGutters maxWidth={false}>
                <Checkbox />
                <Typography fontWeight={600} fontSize={12} color={"#3A3C40"}>
                    Avatar
                </Typography>
            </Container>
            <Typography sx={{minWidth: "250px"}} fontWeight={600} fontSize={12} color={"#3A3C40"}>
                Name
            </Typography>
            <Typography sx={{minWidth:"280px"}} fontWeight={600} fontSize={12} color={"#3A3C40"}>
                Username
            </Typography>
            <Typography sx={{minWidth:"300px"}} fontWeight={600} fontSize={12} color={"#3A3C40"}> 
                Email
            </Typography>
            <Typography sx={{minWidth:"200px"}} fontWeight={600} fontSize={12} color={"#3A3C40"}>
                Role
            </Typography>
            <Typography sx={{minWidth:"71px"}} fontWeight={600} fontSize={12} color={"#3A3C40"}>
                Edit
            </Typography>
        </Container>
    )
}

export default TableValues;