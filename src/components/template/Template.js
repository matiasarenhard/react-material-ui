import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import styles from "./Template.module.css";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BugReportIcon from "@mui/icons-material/BugReport";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Slider from '@mui/material/Slider';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import Checkbox from '@mui/material/Checkbox';

const drawerWidth = 250;

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  background: "#3a3a40",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function valuetext(value) {
  return `${value}°C`;
}

export default function MiniDrawer() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }} className={styles.sidenav}>
      <CssBaseline />
      <AppBar position="fixed" open={open} align="center">
        <Toolbar className={styles.sidenav}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            align="center"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Matias Admin
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        classes={{ paper: styles.sidenav }}
      >
        <DrawerHeader classes={{ paper: styles.sidenav }}>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
            align="left"
          >
            <Badge badgeContent={4} color="error">
              <PhoneAndroidIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
            align="left"
          >
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={17} color="error">
              <BugReportIcon />
            </Badge>
          </IconButton>
          <IconButton
            onClick={handleDrawerClose}
            classes={{ paper: styles.sidenav }}
          >
            {<ChevronLeftIcon style={{ fill: "white" }} />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? (
                    <InboxIcon style={{ fill: "white" }} />
                  ) : (
                    <MailIcon style={{ fill: "white" }} />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 3, p: 3 }} className={styles.body}>
        <DrawerHeader />
        <Grid container spacing={1}>
          <Grid item md={2}>
            <Card sx={{ maxWidth: 800 }}>
              <CardContent>
                <Stack spacing={1}>
                  <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                  <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
                </Stack>
                <br/>
                <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                    <CircularProgress color="secondary" />
                    <CircularProgress color="success" />
                    <CircularProgress color="inherit" />
                </Stack>
                <br/>
                <Chip avatar={<Avatar>M</Avatar>} label="Matias" />
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card sx={{ maxWidth: 800 }}>
              <CardContent>
                 <Button color="secondary">Secondary</Button>
                <Button variant="contained" color="success">
                  Success
                </Button>
                <br/><br/>
                 <Checkbox {...label} defaultChecked />
                <Checkbox {...label} defaultChecked color="secondary" />
                <Checkbox {...label} defaultChecked color="success" />
                <Checkbox {...label} defaultChecked color="default" />
                <br/><br/>
                <Fab color="primary" aria-label="add">
                  <AddIcon />
                </Fab>
                <Fab color="secondary" aria-label="edit">
                  <EditIcon />
                </Fab>
                <Fab disabled aria-label="like">
                  <FavoriteIcon />
                </Fab>
              </CardContent>
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card sx={{ maxWidth: 800 }}>
              <CardContent>
               <Slider
                  aria-label="Temperature"
                  defaultValue={30}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="auto"
                  step={10}
                  marks
                  min={10}
                  max={110}
                />
                <Slider defaultValue={30} step={10} marks min={10} max={110} disabled />
                <Slider
                  aria-label="Temperature"
                  defaultValue={30}
                  getAriaValueText={valuetext}
                  color="secondary"
                />
                <LinearProgress color="secondary" />
                <br/>
                <LinearProgress color="success" />
                <br/>
                  <LinearProgress color="inherit" />
                 
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
