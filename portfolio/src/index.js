import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import About from "./containers/About/About";
import Contact from "./containers/Contact/Contact";
import Projects from "./containers/Projects/Projects";
import Root from './containers/Root/Root';
import "./theme/GlobalStyle";
import Nav from "./containers/Nav/Nav";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Root>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Root>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
