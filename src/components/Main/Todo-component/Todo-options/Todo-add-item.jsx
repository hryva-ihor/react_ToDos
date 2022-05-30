import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LoadingButton from "@mui/lab/LoadingButton";
import Stack from "@mui/material/Stack";

export const TodoAddItem = (props) => {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: { xs: "100%", sm: "25ch" } },
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: { xs: "center", sm: "flex-start" },
        alignItems: { xs: "center", sm: "center" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        sx={{ minWidth: "200px" }}
        onChange={props.inputValue}
        id="filled-basic"
        label="Enter ToDo list"
        variant="filled"
        value={props.titleValue}
      />
      {/* <Button onClick={props.addNewTodoList} variant="contained">
        ADD
      </Button> */}
      <Stack spacing={2}>
        <LoadingButton
          sx={{ opacity: { xs: 1, sm: props.titleValue ? 1 : 0 } }}
          size="small"
          onClick={props.addNewTodoList}
          endIcon={<AssignmentIcon />}
          loading={props.loadingBtn}
          loadingPosition="end"
          variant="contained"
        >
          ADD
        </LoadingButton>
      </Stack>
      {/* <button onClick={props.addNewTodoList}>ADD</button> */}
    </Box>
  );
};
