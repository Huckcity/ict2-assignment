import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: theme.spacing(1.5),
  },
  tagLine: {
    fontSize: "1.5rem",
  },
}));

const MovieHeader = (props) => {
  const classes = useStyles();

  const { show } = props;
  const title = show.title ? show.title : show.name;
  const navigate = useNavigate();

  return (
    <Paper component="div" className={classes.root}>
      <IconButton aria-label="go back" onClick={() => navigate(-1)}>
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>

      <Typography variant="h4" component="h3">
        {title}
        <a href={show.homepage}>
          <HomeIcon color="primary" />
        </a>
        <br />
        <span className={classes.tagLine}>{`   "${show.tagline}"`} </span>
      </Typography>
      <IconButton aria-label="go forward" onClick={() => navigate(1)}>
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default MovieHeader;
