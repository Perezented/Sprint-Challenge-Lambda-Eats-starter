import React from "react";
import { Route } from "react-router-dom";
import TopBanner from "./components/TopBanner";
import Form from "./components/PizzaForm";
import Home from "./components/Home";
import Login from "./components/Login";
const App = () => {
    return (
        <>
            <TopBanner />
            <Route path="/login" component={Login} />
            <div>
                <Route exact path="/">
                    <Home />
                </Route>
            </div>
            <Route path="/pizza/" component={Form} />
        </>
    );
};
export default App;
