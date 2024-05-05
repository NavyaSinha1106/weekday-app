import * as React from "react";
import TextField from "@mui/material/TextField";
import { ISearchBarProps } from "../../types";

const SearchBar: React.FC<ISearchBarProps> = ({ label, value, onChange }) => {
  return (
    <TextField
      autoFocus={!!value.length}
      id="search-bar"
      size="small"
      label={label}
      variant="outlined"
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      sx={{
        width: "220px",
        "& .MuiFormLabel-root": {
          fontSize: "0.88rem",
        },
      }}
    />
  );
};

export default SearchBar;
