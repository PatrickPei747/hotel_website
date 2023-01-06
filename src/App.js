import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/Header";
import Welcome from "./pages/Welcome";
import About from "./pages/About";
import Contact from "./pages/Contact";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

function App() {
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
