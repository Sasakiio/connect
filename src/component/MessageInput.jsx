import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import makeStyles from "@mui/styles/makeStyles";
import { useRef, useState } from "react";

const useStyles = makeStyles({
  textBar: {
    alignItems: "center",
    backgroundColor: "white",
    display: "flex",
    height: 90,
    width: "35em",
    padding: "16px",
    flexGrow: 2,
  },
});

const MessageInput = ({ submit }) => {
  const [text, setText] = useState("");
  const textRef = useRef();
  const classes = useStyles();

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    submit({ text });
    textRef.current.focus();

    setText("");
  };

  return (
    <form onSubmit={handleSendMessage} className={classes.textBar}>
      <TextField
        label="Text"
        // multiline
        InputLabelProps={{
          shrink: true,
        }}
        fullWidth
        value={text}
        inputRef={textRef}
        onChange={handleTextChange}
        variant="standard"
      />
      <Button variant="contained" type="submit">
        Send
      </Button>
    </form>
  );
};

export default MessageInput;
