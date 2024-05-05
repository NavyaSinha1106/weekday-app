import * as React from "react";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { IMultiSelectorProps } from "../../types";

const MultiSelect: React.FC<IMultiSelectorProps> = ({
  data,
  label,
  value,
  onChange,
}) => {
  return (
    <Box>
      <Autocomplete
        multiple
        limitTags={2}
        id="multiple-select"
        size="small"
        options={data}
        getOptionLabel={(option) => option.value}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            InputLabelProps={{ sx: { fontSize: "14px" } }}
          />
        )}
        sx={{ minWidth: "220px" }}
        value={value}
        onChange={(e, val) => {
          onChange(val);
        }}
      />
    </Box>
  );
};

export default MultiSelect;
