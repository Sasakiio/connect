import BottomNavigation from "@mui/material/BottomNavigation";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import makeStyles from "@mui/styles/makeStyles";
import React, { useEffect, useRef, useState } from "react";

import MessageInput from "../component/MessageInput";
import MessageLog from "../component/MessageLog";

const useStyles = makeStyles({
  content: {
    width: `calc(100% - 300px)`,
    height: `calc(100% - 100px)`,
    overflowY: "auto",
  },
  channelsBar: {
    color: "white",
    height: "50em",
    width: 300,
    background: "linear-gradient(45deg, #2575aa 30%, #96b4f5 90%)",
    flexGrow: 0,
  },
  root: {
    backgroundColor: "#eee",
    border: "1px solid black",
    display: "flex",
    height: "50em",
    // width: "60em",
    position: "relative",
    overflowY: "hidden",
  },
});

const BOT_MESSAGES = [
  "Hello,I am connect bot",
  "你可以在此处输入任何东西",
  "自动回复会在此生效",
];

const Home = () => {
  const classes = useStyles();
  const [messages, setMessages] = useState([]);
  const contentContainerRef = useRef();

  const appendMessage = (message) =>
    setMessages((messages) => [...messages, message]);

  const submit = (text) => appendMessage(text);

  useEffect(() => {
    const id = setTimeout(appendMessage, 1000, { text: BOT_MESSAGES });

    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    const container = contentContainerRef.current;
    if (!container) {
      return;
    }

    container.scrollTo({
      top: container.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  return (
    <Box className={classes.root}>
      <div className={classes.channelsBar}>
        <span>Channels</span>
      </div>
      <div className={classes.content} ref={contentContainerRef}>
        {messages.map((m, index) => (
          <div key={index}>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <MessageLog text={m.text} />
            </Grid>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <MessageLog
                text={m.text + Math.random().toString(36).slice(-11)}
              />
            </Grid>
          </div>
        ))}
      </div>
      <Paper
        sx={{ position: "absolute", bottom: 30, left: 300, right: 0 }}
        elevation={3}
      >
        <BottomNavigation>
          <MessageInput submit={submit} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default Home;
