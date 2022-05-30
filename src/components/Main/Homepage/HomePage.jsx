import { Link, Typography, Box, List, ListItem } from "@mui/material";

export const HomePage = () => {
  return (
    <Box>
      <Typography variantMapping={"p"}>
        Hello! This is my training project, here I will gradually add the work
        done with React.js, or add new skills and technologies to existing work.
      </Typography>
      <Typography variantMapping={"p"}>
        Now in my projects I use Hooks, Routing, Axios, MUI, ThemeProvider, etc.
      </Typography>
      <Typography variantMapping={"p"}>
        All information about me and my experience you can found at the links
        below.
      </Typography>
      <List>
        <ListItem>
          <Link
            target="_blank"
            underline="none"
            href="https://www.linkedin.com/in/ihor-hryva/"
          >
            Linkedin
          </Link>
        </ListItem>
        <ListItem>
          <Link
            target="_blank"
            underline="none"
            href="https://github.com/hryva-ihor"
          >
            Github
          </Link>
        </ListItem>
        <ListItem>
          <Link
            target="_blank"
            underline="none"
            href="https://www.instagram.com/griva.igor/"
          >
            Instagram
          </Link>
        </ListItem>
        <ListItem>
          <Link
            download
            underline="none"
            href="./Junior_Frontend_Developer_Hryva_Ihor.pdf"
          >
            CV
          </Link>
        </ListItem>
      </List>
      <Typography variantMapping="p">Contacts</Typography>
      <List>
        <ListItem>
          <Link
            target="_blank"
            underline="none"
            href="mailto:griva.igor422@gmail.com"
          >
            griva.igor422@gmail.com
          </Link>
        </ListItem>
        <ListItem>
          <Link underline="none" href="tel:+380973362537">
            +380973362537
          </Link>
        </ListItem>
        <ListItem>
          <Typography sx={{ color: "#1976d2" }}>
            Telegram @hriva_ihor
          </Typography>
        </ListItem>
      </List>
    </Box>
  );
};
