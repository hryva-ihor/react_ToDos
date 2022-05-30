import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import React from "react";
import Box from "@mui/material/Box";
export const TodoFilter = ({ filter, setFilter }) => {
  const onChange = (e) => {
    setFilter(e.target.value);
  };

  const [filterTodo, setfilterTodo] = React.useState("");

  const handleChange = (event) => {
    setfilterTodo(event.target.value);
    onChange(event);
  };

  return (
    <Box
      sx={{
        "& > :not(style)": { m: 1, width: { xs: "100%", sm: "25ch" } },
        display: "flex",
        justifyContent: { xs: "center", sm: "flex-end" },
      }}
    >
      <FormControl sx={{ width: 150 }}>
        <InputLabel id="demo-simple-select-label">Filter todos</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={filterTodo}
          label="Filter todos"
          onChange={handleChange}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="done">Done</MenuItem>
          <MenuItem value="notDone">Not done</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
