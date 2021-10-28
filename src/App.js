import "./App.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import FreeShipping from "./components/FreeShipping";
import Caro from "./containers/Carousel";
import Landing from "./containers/Landing";
import Footer from "./containers/Footer";
import Product from "./components/Product";
import Products from "./components/Products";

function App() {
    return (
        <div className="App">
            <Router>
                <Nav />
                <FreeShipping />
                <Switch>
                    <Route path="/products">
                        <Products />
                    </Route>
                    <Route path="/product/:id">
                        <Product />
                    </Route>
                    <Route path="/">
                        <Landing />
                        <Caro />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
