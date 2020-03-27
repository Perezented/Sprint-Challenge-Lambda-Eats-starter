import React, { useState, useEffect } from "react";

export default function Form() {
    const [formState, setFormState] = useState({
        size: "",
        sauce: "",
        toppings: "",
        crust: "",
        specialInstructions: "",
        numberOfPizzas: ""
    });
    const [error, setError] = useState({
        size: "",
        sauce: "",
        toppings: "",
        crust: "",
        specialInstructions: "",
        numberOfPizzas: ""
    });
    const [post, setPost] = useState([]);
    const [greySubmit, setButtonOn] = useState(true);

    return (
        <form>
            <label htmlFor="size">
                <input id="size" type="text" name="size" />
            </label>

            <div>
                <h4>Pizza Sauce</h4>
                <label htmlFor="pizzaSauce">
                    {/* Change */}
                    <h5>Original Sauce</h5>
                    {/* Change */}
                    <input
                        id="pizzaSauce" //change
                        type="radio" //same
                        name="sauce" //same
                        value="Pizza Sauce" //change
                    />
                </label>
                <label htmlFor="pizzaSauce">
                    <h5>Healthy Sauce</h5>
                    <input
                        id="healthySauce"
                        type="radio"
                        name="sauce"
                        value="Healthy Sauce"
                    />
                </label>
                <label htmlFor="garlicSauce">
                    <h5>Garlic Parmesan Sauce</h5>
                    <input
                        id="garlicSauce"
                        type="radio"
                        name="sauce"
                        value="Garlic Parmesan Sauce"
                    />
                </label>
                <label htmlFor="bbqSauce">
                    <h5>BBQ Sauce</h5>
                    <input
                        id="bbqSauce"
                        type="radio"
                        name="sauce"
                        value="BBQ Sauce"
                    />
                </label>
                <label htmlFor="alfredoSauce">
                    <h5>Alfredo Sauce</h5>
                    <input
                        id="alfredoSauce"
                        type="radio"
                        name="sauce"
                        value="Alfredo Sauce"
                    />
                </label>
            </div>

            <label htmlFor="">
                <input id="" type="" name="" />
            </label>
            <label htmlFor="">
                <input id="" type="" name="" />
            </label>
            <label htmlFor="">
                <input id="" type="" name="" />
            </label>
            <label htmlFor="">
                <input id="" type="" name="" />
            </label>
        </form>
    );
}
