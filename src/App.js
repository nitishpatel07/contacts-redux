import React from "react";
import Home from "./pages/Home";
import { Switch, Route } from "react-router-dom";
import AddUser from "./pages/AddUser";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/addUser" component={AddUser} />
      </Switch>
    </div>
  );
}

export default App;
