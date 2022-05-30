import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const NotFoundPage = () => {
  return (
    <Box>
      <Typography variant="h2">Error 404</Typography>
      <Typography variant="p">Page not find</Typography>
      <Typography variant="span">
        Pleace go to <Link to={"/"}> Home page</Link>
      </Typography>
    </Box>
  );
};
