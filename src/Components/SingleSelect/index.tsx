import * as Raect from "react";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { ISingleSelectorProps } from "../../types";

const SingleSelect: React.FC<ISingleSelectorProps> = ({
  data,
  label,
  value,
  onChange,
}) => {
  return (
    <Box>
      <Autocomplete
        id="single-select"
        options={data}
        size="small"
        getOptionLabel={(option) => {
          return option.value;
        }}
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              label={label}
              InputLabelProps={{ sx: { fontSize: "14px" } }}
            />
          );
        }}
        sx={{ minWidth: "220px" }}
        value={value}
        onChange={(e, val) => {
          onChange(val);
        }}
      />
    </Box>
  );
};

export default SingleSelect;
