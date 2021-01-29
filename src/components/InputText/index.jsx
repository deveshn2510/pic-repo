import { TextField } from "@material-ui/core";
import React from "react";

export default function InputText(props) {
  const { label, value, setstate, fullWidth } = props;
  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      size="small"
      value={value}
      onChange={(e) => {
        setstate(e.target.value);
      }}
      fullWidth={fullWidth}
      style={{ backgroundColor: "white" }}
    />
  );
}
