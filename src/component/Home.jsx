import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import Avatar from "@mui/material/Avatar";
import BottomNavigation from "@mui/material/BottomNavigation";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import * as React from "react";
import { FormattedDate, FormattedTime, IntlProvider } from "react-intl";

const useStyles = makeStyles({
  channelsBar: {
    color: "white",
    height: "50em",
    width: 300,
    background: "linear-gradient(45deg, #2575aa 30%, #96b4f5 90%)",
    flexGrow: 0,
  },
  contentBar: {
    display: "flex",
  },
  contentHeader: {
    display: "flex",
  },
  root: {
    backgroundColor: "#eee",
    border: "1px solid black",
    display: "flex",
    height: "50em",
    width: "60em",
    position: "relative",
  },
  textBar: {
    backgroundColor: "white",
    height: 90,
    width: "35em",
    padding: "16px",
    flexGrow: 2,
  },
});

const Home = () => {
  const [value, setValue] = React.useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const classes = useStyles();

  return (
    <Box className={classes.root} component="form" sx={{ width: "60em" }}>
      <div className={classes.channelsBar}>
        <span>Channels</span>
      </div>
      <div className={classes.contentBar}>
        <Avatar alt="Name" src=" " />
        <div className={classes.contentHeader}>
          Label
          <IntlProvider locale="zh" defaultLocale="zh">
            <Typography variant="body2" color="textSecondary">
              <FormattedDate
                day="2-digit"
                month="long"
                value={new Date()}
                year="numeric"
              />
            </Typography>
            <Typography variant="body2" color="textSecondary">
              <FormattedTime
                hour="numeric"
                minute="numeric"
                value={new Date()}
              />
            </Typography>
          </IntlProvider>
        </div>

        <Typography variant="body2">Hello :)</Typography>
      </div>
      <Paper
        sx={{ position: "absolute", bottom: 30, left: 300, right: 0 }}
        elevation={3}
      >
        <BottomNavigation>
          <div className={classes.textBar}>
            <TextField
              label="Text"
              multiline
              fullWidth
              value={value}
              onChange={handleChange}
              variant="outlined"
            />
          </div>
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default Home;
