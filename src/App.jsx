import { useState } from "react";
import { BrowserRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import Construction from "./pages/Construction";
import Random from "./pages/Random";
import "./App.css";

function App() {
  return (
    // <Router>
    //   <Switch>
    //     <Route exact path="/">
    //       <Construction />
    //     </Route>
    //     <Route path="/random">
    //       <Random />
    //     </Route>
    //     {/* Add more routes for other pages */}
    //   </Switch>
    // </Router>
    <>
      {/* <nav>
        <Link to="/">Construction</Link>
        <Link to="/random">Random</Link>
      </nav> */}
      <Outlet />
    </>
  );
}

export default App;