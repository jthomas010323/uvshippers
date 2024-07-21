import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Construction />} />
        <Route path="/random" element={<Random />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
