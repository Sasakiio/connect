import { makeStyles } from "@material-ui/styles";
import BottomNavigation from "@mui/material/BottomNavigation";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import MessageInput from "../component/MessageInput";
import MessageLog from "../component/MessageLog";

const useStyles = makeStyles({
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
    width: "60em",
    position: "relative",
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root} component="form" sx={{ width: "60em" }}>
      <div className={classes.channelsBar}>
        <span>Channels</span>
      </div>
      <MessageLog />
      <Paper
        sx={{ position: "absolute", bottom: 30, left: 300, right: 0 }}
        elevation={3}
      >
        <BottomNavigation>
          <MessageInput />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default Home;
