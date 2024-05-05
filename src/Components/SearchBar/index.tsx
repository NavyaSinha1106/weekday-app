import * as React from "react";
import TextField from "@mui/material/TextField";
import { ISearchBarProps } from "../../types";

const SearchBar: React.FC<ISearchBarProps> = ({ label, value, onChange }) => {
  return (
    <TextField
      autoFocus={!!value.length}
      id="search-bar"
      label={label}
      variant="outlined"
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    />
  );
};

export default SearchBar;
