import React from "react";
import clsx from "clsx";
import { Link, NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Button } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import PeopleIcon from "@material-ui/icons/People";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import DashboardIcon from "@material-ui/icons/Dashboard";
// import EqualizerIcon from '@material-ui/icons/Equalizer';
import TimerIcon from "@material-ui/icons/Timer";
import MailIcon from "@material-ui/icons/Mail";
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    border: "none",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    border: "none",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(7) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "4px",
    color: "white",
    backgroundColor: "black",
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  sideText: {
    textDecoration: "none",
    color: "grey",
  },
  menuButton: {
    color: "white",
    textDecoration: "none",
  },
}));


export default function SideNav(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Drawer
        onMouseEnter={handleDrawerOpen}
        onMouseLeave={handleDrawerClose}
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            <img
              className="logo"
              src={`../images/logo.png`}
              alt="Club Challenge Logo"
            />
          </Link>
        </div>
        <Divider />
        <List>
          <NavLink className={classes.sideText} to="/">
            {" "}
            <ListItem
              selected={window.location.pathname === "/"}
              button
            >
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItem>
          </NavLink>
          <NavLink className={classes.sideText} to="/">
            <ListItem
              selected={window.location.pathname === "/"}
              button
            >
              <ListItemIcon>
                <EmojiEventsIcon />
              </ListItemIcon>
              <ListItemText>Rooms</ListItemText>
            </ListItem>
          </NavLink>
          <NavLink className={classes.sideText} to="/">
            <ListItem
              selected={window.location.pathname === "/"}
              button
            >
              <ListItemIcon>
                <DirectionsRunIcon />
              </ListItemIcon>
              <ListItemText>TV/Video</ListItemText>
            </ListItem>
          </NavLink>
          <NavLink className={classes.sideText} to="/">
            <ListItem selected={window.location.pathname === "/"} button>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText>Lights</ListItemText>
            </ListItem>
          </NavLink>
          <NavLink className={classes.sideText} to="/">
            <ListItem
              selected={window.location.pathname === "/"}
              button
            >
              <ListItemIcon>
                <TimerIcon />
              </ListItemIcon>
              <ListItemText>HVAC</ListItemText>
            </ListItem>
          </NavLink>
          <NavLink className={classes.sideText} to="/">
            <ListItem selected={window.location.pathname === "/"} button>
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText>Security</ListItemText>
            </ListItem>
          </NavLink>
          <Divider></Divider>
          <a className={classes.sideText} href="mailto:paull@linck.net">
            <ListItem button>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText>Contact Support</ListItemText>
            </ListItem>
          </a>
          <Divider></Divider>
          <ListItem style={{ textAlign: "center" }}>
            {open ? (
              <ListItemText>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginLeft: "3px" }}
                >
                  <NavLink className={classes.menuButton} to="/activitypage">
                    Settings
                  </NavLink>
                </Button>
              </ListItemText>
            ) : null}
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
