import * as React from "react";
import "./Dashboard.css";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Banner from "../../home/Banner/Banner";

import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { Button } from "@mui/material";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import useAuth from "../../../hooks/useAuth";
import AdminRoute from "../../authentication/AdminRoute/AdminRoute";
import Pay from "../Pay/Pay";
import MyOrders from "../MyOrders/MyOrders";
import Review from "../Review/Review";
import ManageAllProducts from "../ManageAllProducts/ManageAllProducts";
import ManageProducts from "../ManageProducts/ManageProducts";
import AddProducts from "../AddProducts/AddProducts";
const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const { admin, logOut } = useAuth();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Box className="link-set">
        <Link to="/home">
          {" "}
          <Button> Home </Button>
        </Link>
        <Link to={`${url}`}>
          <Button> Dasboard </Button>
        </Link>
        <Link to="/home">
          <Button onClick={logOut}> LogOut </Button>
        </Link>
      </Box>
      {admin ? (
        <Box className="link-set">
          <Link to={`${url}/manageallorders`}>
            <Button>ManageAllOrders</Button>
          </Link>
          <Link to={`${url}/addproducts`}>
            <Button>Add Products </Button>
          </Link>
          <Link to={`${url}/makeadmin`}>
            <Button>Make Admin </Button>
          </Link>
          <Link to={`${url}/manageproducts`}>
            <Button>Manage Products </Button>
          </Link>
        </Box>
      ) : (
        <Box className="link-set">
          <Link to={`${url}/pay`}>
            <Button> Pay </Button>
          </Link>
          <Link to={`${url}/myorders`}>
            <Button>My Orders </Button>
          </Link>
          <Link to={`${url}/review`}>
            <Button>Review </Button>
          </Link>
        </Box>
      )}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            DashBoard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {/* dashboard home page container */}

        <Switch>
          <Route exact path={path}>
            <Banner></Banner>
          </Route>
          <Route exact path={`${path}/pay`}>
            <Pay></Pay>
          </Route>
          <Route exact path={`${path}/myorders`}>
            <MyOrders></MyOrders>
          </Route>
          <Route exact path={`${path}/review`}>
            <Review></Review>
          </Route>
          <AdminRoute path={`${path}/makeadmin`}>
            <MakeAdmin></MakeAdmin>
          </AdminRoute>
          <AdminRoute path={`${path}/manageallorders`}>
            <ManageAllProducts></ManageAllProducts>
          </AdminRoute>
          <AdminRoute path={`${path}/manageproducts`}>
            <ManageProducts></ManageProducts>
          </AdminRoute>
          <AdminRoute path={`${path}/addproducts`}>
            <AddProducts></AddProducts>
          </AdminRoute>
        </Switch>
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
