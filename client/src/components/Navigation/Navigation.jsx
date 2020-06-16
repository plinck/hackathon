import React from "react";
import { NavLink, Link, withRouter } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import {
  Fab,
  Typography,
  Container,
  Toolbar,
  IconButton,
  SwipeableDrawer,
  ListItem,
  ListItemText,
  List,
  ListItemIcon,
  Divider,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import PersonIcon from "@material-ui/icons/Person";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import DashboardIcon from "@material-ui/icons/Dashboard";
import SettingsIcon from "@material-ui/icons/Settings";
import Sidenav from "./SideNav/Sidenav";
import TimerIcon from "@material-ui/icons/Timer";
// import EqualizerIcon from '@material-ui/icons/Equalizer';
import MailIcon from "@material-ui/icons/Mail";
import PeopleIcon from "@material-ui/icons/People";
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    height: "50px",
    marginTop: "5px",
    width: "auto"
  },
  menuButton: {
    color: "white",
    textDecoration: "none",
  },
  mobileButton: {
    color: "gray",
    textDecoration: "none",
  },
  title: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  nonAuthTitle: {},
  titleText: {
    verticalAlign: "super",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  navIconHide: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  navButtonsHide: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  toolBarFlex: {
    [theme.breakpoints.up("md")]: {
      justifyContent: "flex-end",
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-between",
    },
  },
  nonAuthToolBarFlex: {
    justifyContent: "space-between",
  },
  subHeader: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    minHeight: "20px !important",
    maxHeight: "30px !important",
    margin: "0px 0px 0px 30px",
    display: "flex",
    justifyContent: "space-between",
  }
}));

let Navigation = (props) => {
  const classes = useStyles();

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const navigationAdminMobile = (
    <List onClick={toggleDrawer("left", false)}>
      <ListItem>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText>
          <NavLink className={classes.mobileButton} to="/">
            Home
          </NavLink>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <EmojiEventsIcon />
        </ListItemIcon>
        <ListItemText>
          <NavLink className={classes.mobileButton} to="/">
            Rooms
          </NavLink>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <DirectionsRunIcon />
        </ListItemIcon>
        <ListItemText>
          <NavLink className={classes.mobileButton} to="/">
            TV/Video
          </NavLink>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText>
          <NavLink className={classes.mobileButton} to="/">
            Lights
          </NavLink>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <TimerIcon />
        </ListItemIcon>
        <ListItemText>
          <NavLink className={classes.mobileButton} to="/">
            HVAC
          </NavLink>
        </ListItemText>
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText>
          <NavLink className={classes.mobileButton} to="/teams">
            Security
          </NavLink>
        </ListItemText>
      </ListItem>
      <Divider></Divider>
      <Divider></Divider>
      <ListItem>
        <ListItemIcon>
          <MailIcon />
        </ListItemIcon>
        <ListItemText>
          <a
            className={classes.mobileButton}
            href="mailto:paull@linck.net"
          >
            Contact Support
          </a>
        </ListItemText>
      </ListItem>
    </List>
  );
  const navigationAdmin = (
    <div className={classes.navButtonsHide}>
      <Sidenav {...props} />

      <NavLink className={classes.menuButton} to="/">
        <Fab size="small" color="primary" aria-label="add">
          <SettingsIcon />
        </Fab>
      </NavLink>
    </div>
  );

  let navBar, navBarMobile;
  navBar = navigationAdmin;
  navBarMobile = navigationAdminMobile;

  return (
    <div>
      <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        {navBarMobile}
      </SwipeableDrawer>

      <AppBar color="secondary">
        <Container maxWidth="xl">
          <Toolbar
            style={{ minHeight: "64px" }}
            className={
                classes.toolBarFlex
            }
          >
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={toggleDrawer("left", true)}
              className={classes.navIconHide}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              variant="h4"
              className={
                classes.title
              }
            >
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                <img
                  className="logo"
                  src={`../images/logo.png`}
                  alt="Challenge Logo"
                />{" "}
              </Link>
            </Typography>

            {navBar}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}; //class

export default withRouter(Navigation);
