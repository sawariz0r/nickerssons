import React from "react";
import HomePage from "./../home";
import { Switch, Route, Router } from "./../../util/router.js";
import analytics from "./../../util/analytics.js";
import { ProvideAuth } from "./../../util/auth.js";
import "./styles.scss";

function App(props) {
  return (
    <ProvideAuth>
      <div className="demo-banner">This is only a Demo, by <a href="https://spectly.se">Oscar Nilsson</a></div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route
            component={({ location }) => {
              return (
                <div
                  style={{
                    padding: "50px",
                    width: "100%",
                    textAlign: "center"
                  }}
                >
                  The page <code>{location.pathname}</code> does not exist. This is only a demo.
                </div>
              );
            }}
          />
        </Switch>
      </Router>
    </ProvideAuth>
  );
}

export default App;
