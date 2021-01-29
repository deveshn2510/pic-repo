import React from "react";
import { Paper, Box, Grid, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& *": {
      textAlign: "start",
    },
    borderRadius: 8,
    minWidth: 290,
    boxShadow: `0px 0px 9px grey`,
    marginLeft: 16,
    marginBottom: 16,
  },

  courseName: {
    marginBottom: 16,
  },
  applicationId: {
    fontSize: 14,
  },
  content: {
    backgroundSize: "cover",
    color: "white",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },

  name: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: "25px",
  },
}));

export default function ImageCard(props) {
  const classes = useStyles();
  const { data } = props;

  return (
    <Paper className={classes.root}>
      <Box p={4} pb={0} className={classes.content}>
        <Grid container>
          <Grid item>
            <img src={data.Url} style={{ width: 220 }}></img>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.footer} py={2}>
        <Typography className={classes.name}>{data.Name}</Typography>
      </Box>
    </Paper>
  );
}
