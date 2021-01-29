import { Button, Grid, makeStyles, Paper } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import InputText from "../InputText";
import Modal from "@material-ui/core/Modal";
import ImageCard from "../ImageCard";

const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "white",
    padding: 7,
    marginLeft: 1,
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    padding: 24,
    top: "42%",
    left: "31%",
    borderRadius: 3,
    borderColor: "white",
  },
  input: {
    marginBottom: 8,
  },
  upButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    display: "flex",
    marginTop: 32,
    padding: 16,
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      padding: 8,
    },
  },
  container: {
    marginTop: 60,
  },
}));

export default function Search() {
  const classes = useStyles();
  const [search, setSearch] = useState();
  const [url, setUrl] = useState();
  const [name, setName] = useState();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpload = () => {
    const copyData = data;
    if (url === "" || name === "") {
      alert("Please fill the details");
    } else {
      copyData.push({ Url: url, Name: name });
      handleClose();
      setData(copyData);
      setUrl("");
      setName("");
    }
  };

  const handleSearch = () => {
    let count = 0;
    data.forEach((el) => {
      if (el.Name.includes(search)) {
        count++;
      }
    });
    setSearch("");
    if (count === 0) {
      alert("No results found");
    }
  };

  useEffect(() => {
    if (search) {
      let arr = [];
      data.forEach((el) => {
        if (el.Name.includes(search)) {
          arr.push(el);
        }
        setSearchData(arr);
      });
    }
  }, [search, data]);

  return (
    <div>
      <div className={classes.container}>
        <Grid container spacing={2} alignItems="center" justify="center">
          <Grid item>
            <InputText label="Search" value={search} setstate={setSearch} />
            <Button
              variant="outlined"
              className={classes.button}
              onClick={() => {
                handleSearch();
              }}
            >
              <SearchIcon color="primary" />
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              className={classes.button}
              onClick={handleOpen}
            >
              <ArrowUpwardIcon color="primary" />
            </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              <Paper>
                <Grid
                  className={classes.paper}
                  spacing={2}
                  direction="column"
                  justify="center"
                  alignItems="center"
                >
                  <Grid item className={classes.input}>
                    <InputText
                      label="Image URL"
                      value={url}
                      setstate={setUrl}
                      fullWidth={true}
                    />
                  </Grid>
                  <Grid item className={classes.input}>
                    <InputText
                      label="Image Name"
                      value={name}
                      setstate={setName}
                      fullWidth={true}
                    />
                  </Grid>
                  <Grid item className={classes.upButton}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        handleUpload();
                      }}
                    >
                      UPLOAD
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Modal>
          </Grid>
        </Grid>
      </div>
      <div className={classes.card}>
        {data.length && searchData.length === 0
          ? data.map((el) => {
              return <ImageCard data={el} />;
            })
          : null}
        {searchData.length
          ? searchData.map((el) => {
              return <ImageCard data={el} />;
            })
          : null}
      </div>
    </div>
  );
}
