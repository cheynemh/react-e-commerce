import "./App.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import FreeShipping from "./components/Nav/FreeShipping";
import Caro from "./components/Carousel";
import Grid from "./components/Grid";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Router>
                <Nav />
                <FreeShipping />
            </Router>

            <Caro />
            <Grid />

            <Footer />
        </div>
    );
}

export default App;
