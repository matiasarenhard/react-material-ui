import * as React from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import MailIcon from "@mui/icons-material/Mail";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BugReportIcon from "@mui/icons-material/BugReport";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import styles from "./DrawerHeader.module.css";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const IconsList = ({onToggle}) => {
  return (
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
        <IconButton onClick={onToggle} classes={{ paper: styles.sidenav }}>
          {<ChevronLeftIcon style={{ fill: "white" }} />}
        </IconButton>
      </DrawerHeader>
  );
};

export default IconsList;
