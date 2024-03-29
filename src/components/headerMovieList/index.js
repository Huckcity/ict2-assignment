import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    marginBottom: theme.spacing(1.5),
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const { controls } = props;
  const title = props.title ? props.title : props.tvshow.title;
  const navigate = useNavigate();

  return (
    <Paper component="div" className={classes.root}>
      {controls && (
        <IconButton aria-label="go back" onClick={() => navigate(-1)}>
          <ArrowBackIcon color="primary" fontSize="large" />
        </IconButton>
      )}
      <Typography variant="h4" component="h3">
        {title}
      </Typography>

      {controls && (
        <IconButton aria-label="go forward" onClick={() => navigate(1)}>
          <ArrowForwardIcon color="primary" fontSize="large" />
        </IconButton>
      )}
    </Paper>
  );
};

export default Header;
