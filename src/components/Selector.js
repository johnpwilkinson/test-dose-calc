import * as React from "react";
import Switch from "@mui/joy/Switch";
import { Typography } from "@mui/joy";

export default function Selector(props) {
  const [dark, setDark] = React.useState(false);
  const handleToggle = (event) => {
    setDark(event.target.checked);
    props.toggleTrt();
  };
  return (
    <Switch
      color={dark ? "primary" : "danger"}
      slotProps={{ input: { "aria-label": "dark mode" } }}
      startDecorator={<Typography color="white">TRT</Typography>}
      endDecorator={<Typography color="white">hCG</Typography>}
      checked={dark}
      onChange={handleToggle}
    />
  );
}
