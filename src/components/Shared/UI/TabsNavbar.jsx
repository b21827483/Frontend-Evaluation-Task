import { useState } from "react";
import { Tab, Tabs } from "@mui/material";

function TabsNavbar(props) {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        props.setFilterByRole(newValue);
    };

    const tabStyle = {textTransform: "none",
                      m:0,
                      p:0, 
                      fontWeight: "600", 
                      fontSize: "13px", 
                      lineHeight: "15.85px"};

    return (
        <Tabs value={value}
            onChange={handleChange}
            variant="scrollable"
            sx={{
                height: "48px",
                width: "600px",
                '@media (max-width: 560px)': {width: "180px"}
            }}
            TabIndicatorProps={{
                sx: {
                    height: "2px",
                }
            }}>
                <Tab sx={tabStyle} label="All Users" />
                <Tab sx={tabStyle} label="Contributor"/>
                <Tab sx={tabStyle} label="Author"/>
                <Tab sx={tabStyle} label="Adminstrator"/>
                <Tab sx={tabStyle} label="Subscriber"/>
        </Tabs>
    )
}

export default TabsNavbar
