import { useState } from "react";
import { Tab, Tabs } from "@mui/material";

function TabsNavbar() {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
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
            sx={{
                height: "48px",
                width: "518px",
            }}
            TabIndicatorProps={{
                sx: {
                    height: "2px",
                }
            }}>
                <Tab sx={tabStyle} label={"All Users"} />
                <Tab sx={tabStyle} label="Contributers"/>
                <Tab sx={tabStyle} label="Author"/>
                <Tab sx={tabStyle} label="Adminstrator"/>
                <Tab sx={tabStyle} label="Subscriber"/>
        </Tabs>
    )
}

export default TabsNavbar
