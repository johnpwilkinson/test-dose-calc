import React from "react";
import { FormControl, Select, MenuItem } from "@mui/joy";

export default function DropDown(props) {
  return (
    <FormControl>
      <Select
        placeholder={props.title}
        value={props.selectedValue}
        onChange={props.handler}
      >
        {props.values.map((concentration, index) => (
          <MenuItem key={concentration.id} value={concentration.value}>
            {concentration.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
