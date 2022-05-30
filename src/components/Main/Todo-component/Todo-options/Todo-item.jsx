import { Button, Grid, Typography } from "@mui/material";
import { todoElementStyle } from "../../../../custom.js/todo_style";
import "../Todo-style.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import CheckIcon from "@mui/icons-material/Check";
import SettingsBackupRestoreIcon from "@mui/icons-material/SettingsBackupRestore";
import Tooltip from "@mui/material/Tooltip";
export const TodoItem = (props) => {
  const {
    todo,
    onChangeRedactInput,
    redInputValue,
    onSaveBtnClick,
    OnDoneBtnClick,
    OnDelBtnClick,
    redactTitle,
  } = props;
  const { completed, title, id } = todo;
  const { todoItemStyle, todoBtnStyle, todoItemListStyle, redactBtnStyle } =
    todoElementStyle(completed);
  return (
    <Grid item xs={12}>
      <Box
        sx={{ display: "flex", alignItems: "center" }}
        style={todoItemStyle}
        className="todo-item"
      >
        <Tooltip title={`${!completed ? "done" : "return"}`} placement="top">
          <Button
            sx={{ m: 1 }}
            variant="contained"
            color={todoBtnStyle}
            className="todo-item__btn-done"
            onClick={() => {
              OnDoneBtnClick(id);
            }}
          >
            {completed ? <SettingsBackupRestoreIcon /> : <CheckIcon />}
          </Button>
        </Tooltip>
        <Box id={`divList` + id} style={{ display: "flex" }}>
          <Typography
            variant="span"
            key={id}
            id={`list` + id}
            style={todoItemListStyle}
            className="todo-item__list"
            sx={{ p: 1, display: "flex", alignItems: "center" }}
          >
            {title}
          </Typography>
          <input
            id={`input` + id}
            type="text"
            className="redact-input"
            value={redInputValue}
            onChange={onChangeRedactInput}
          />

          <Button
            variant="contained"
            color="success"
            style={redactBtnStyle}
            id={`saveBtn` + id}
            className="todo-item__btn-done save-btn"
            onClick={() => {
              onSaveBtnClick(id);
            }}
          >
            Save
          </Button>
          <Tooltip title="edit" placement="top">
            <EditIcon
              className="material-icon-cursor"
              sx={{ transform: "scale(0.7)", display: redactBtnStyle, mr: 1 }}
              id={`redBtn` + id}
              onClick={() => {
                redactTitle(id);
              }}
            />
          </Tooltip>
        </Box>

        <Tooltip title="delet" placement="top">
          <Button
            sx={{ m: 1 }}
            variant="outlined"
            color="error"
            onClick={() => {
              OnDelBtnClick(id);
            }}
          >
            <DeleteIcon />
          </Button>
        </Tooltip>
      </Box>
    </Grid>
  );
};
