import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Switch>
              <Route path="/" exact component={HomeScreen} />
              <Route path="/product/:id" exact component={ProductScreen} />
            </Switch>
          </Container>
        </main>
        <Footer />
      </Router>
    </React.Fragment>
  );
};

export default App;
