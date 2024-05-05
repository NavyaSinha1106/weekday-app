import * as Raect from "react";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { ISingleSelectorProps } from "../../types";

const SingleSelect: React.FC<ISingleSelectorProps> = ({
  data,
  label,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <Box>
      <Autocomplete
        id="single-select"
        options={data}
        getOptionLabel={(option) => {
          return option.value;
        }}
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              label={label}
              placeholder={placeholder}
              InputLabelProps={{ sx: { fontSize: "14px" } }}
            />
          );
        }}
        sx={{ width: "220px" }}
        value={value}
        onChange={(e, val) => {
          onChange(val);
        }}
      />
    </Box>
  );
};

export default SingleSelect;
