import "./App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import AuthProvider from "./contexts/AuthProvider";
import Home from "./pages/home/Home/Home";
import Purchase from "./pages/Purchase/Purchase";
import Register from "./pages/authentication/Register/Register";
import Login from "./pages/authentication/Login/Login";
import Explore from "./pages/Explore/Explore";
import PrivateRoute from "./pages/authentication/PrivateRoute/PrivateRoute";
import Dashboard from "./pages/DashBoard/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/purchase/:productName">
              <Purchase></Purchase>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/explore">
              <Explore></Explore>
            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
