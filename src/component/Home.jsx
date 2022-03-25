import { makeStyles } from "@material-ui/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import * as React from "react";

const useStyles = makeStyles({
  channelsBar: {
    color: "white",
    height: "50em",
    width: 300,
    background: "linear-gradient(45deg, #2575aa 30%, #96b4f5 90%)",
  },
  root: {
    backgroundColor: "#eee",
    border: "1px solid black",
    height: "50em",
    width: "60em",
  },
  textBar: {
    backgroundColor: "white",
  },
});

const Home = () => {
  const [value, setValue] = React.useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const classes = useStyles();

  return (
    <Box className={classes.root} component="form">
      <div className={classes.channelsBar}>
        <span>Channels</span>
      </div>
      <div className={classes.textBar}>
        <TextField
          label="Text"
          multiline
          fullWidth
          value={value}
          onChange={handleChange}
          variant="standard"
        />
      </div>
    </Box>
  );
};

export default Home;
