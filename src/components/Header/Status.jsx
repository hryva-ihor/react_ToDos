import { Typography } from "@mui/material";
import { loadStatusFunc } from "../../custom.js/todo_style";
import { useTodos } from "../../hooks/todo_common";
export const Status = () => {
  const { status } = useTodos();
  const [color] = loadStatusFunc(status);

  return (
    <>
      <Typography variant="span">Status:</Typography>
      <Typography
        variant="span"
        style={{
          background: color,
          display: "inline-block",
          width: "20px",
          height: "20px",
          borderRadius: "50%",
          marginRight: "9px",
        }}
      ></Typography>
    </>
  );
};
