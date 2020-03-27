import React from "react";
import { Route, Link } from "react-router-dom";
import TopBanner from "./components/TopBanner";
import Form from "./components/PizzaForm";

const App = () => {
    return (
        <>
            <TopBanner />
            <Route exact path="/">
                <Home />
            </Route>
            <p>Home of the square pizza made to fit in your pizza box!</p>
            <p>Order your pizza here!</p>

            <Route path="/pizza/" component={Form} />
        </>
    );
};
export default App;
