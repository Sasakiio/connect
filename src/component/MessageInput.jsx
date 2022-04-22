import { makeStyles } from "@material-ui/styles";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";

const useStyles = makeStyles({
  textBar: {
    backgroundColor: "white",
    display: "flex",
    height: 90,
    width: "35em",
    padding: "16px",
    flexGrow: 2,
  },
});

const MessageInput = () => {
  const [text, setText] = useState();
  const classes = useStyles();

  const handleTextChange = (event) => {
    setText(event.target.text);
  };

  return (
    <div className={classes.textBar}>
      <TextField
        label="Text"
        multiline
        fullWidth
        value={text}
        onChange={handleTextChange}
        variant="outlined"
      />
      <Button variant="contained">Send</Button>
    </div>
  );
};

export default MessageInput;
