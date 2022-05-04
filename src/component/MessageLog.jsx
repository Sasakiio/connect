import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import Avatar from "@mui/material/Avatar";
import { FormattedDate, FormattedTime } from "react-intl";

const useStyles = makeStyles({
  contentBar: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    maxHeight: "5rem",
    padding: "8px",
    margin: "8px",
  },
  contentHeader: {
    alignItems: "center",
    display: "flex",
  },
  label: {
    margin: 8,
  },
});

const MessageLog = ({ text }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.contentBar}>
        <div className={classes.contentHeader}>
          <Avatar alt="Name" src=" " />
          <div className={classes.label}>Label</div>
          <Typography variant="body2" color="textSecondary">
            <FormattedDate
              day="2-digit"
              month="long"
              value={new Date()}
              year="numeric"
            />
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <FormattedTime hour="numeric" minute="numeric" value={new Date()} />
          </Typography>
        </div>
        <Typography variant="body2">{text}</Typography>
      </div>
    </>
  );
};

export default MessageLog;
