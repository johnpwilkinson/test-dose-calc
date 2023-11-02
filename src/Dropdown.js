import React from "react";
import { Select, Option } from "@mui/joy";

export default function DropDown(props) {
  return (
  
      <Select
        placeholder={props.title}
        value={props.selectedValue}
        onChange={props.handler}
      >
        {props.values.map((v, index) => (
           <Option key={v.id} value={v.value}>
           {v.name} -- {v.value}
         </Option>
        ))}
      </Select>
  
  );
}
