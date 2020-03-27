import React from "react";
import { Route, Link } from "react-router-dom";
import TopBanner from "./components/TopBanner";
import Form from "./components/PizzaForm";
import Home from "./components/Home";
const App = () => {
    return (
        <>
            <TopBanner />
            <div>
                {" "}
                <Route exact path="/">
                    <Home />
                </Route>
            </div>
            <Route path="/pizza/" component={Form} />
        </>
    );
};
export default App;
