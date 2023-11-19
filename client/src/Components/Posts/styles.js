import React from "react";
import {createTheme} from '@mui/material/styles'
// import createTheme from
const MyComponent = () => {
  const theme = createTheme();
  return (
    <div
      sx={{
        display: "flex",
        alignItems: "center",
        "& .smMargin": {
          
          margin: (theme) => theme.spacing(1),
        },
        "& .actionDiv": {
          textAlign: "center",
        },
      }}
    >
      {/* Your component content */}
    </div>
  );
};

export default MyComponent;
