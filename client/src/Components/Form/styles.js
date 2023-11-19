import { makeStyles } from "@mui/styles";
import { createTheme, useTheme } from "@mui/material/styles";

export default makeStyles((theme) => {
  const theme2 = useTheme(theme);
  return {
    root: {
      "& .MuiTextField-root": {
        margin: theme2.spacing(1),
      },
    },
    paper: {
      padding: theme2.spacing(2),
    },
    form: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    fileInput: {
      width: "97%",
      margin: "10px 0",
    },
    buttonSubmit: {
      marginBottom: 10,
    },
  };
});
