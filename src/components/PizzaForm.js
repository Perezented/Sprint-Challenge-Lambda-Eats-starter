import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

const formSchema = yup.object().shape({
    size: yup
        .string()
        .required("Pick a size, I wont deliver just toppings to ya."),
    sauce: yup.string(),
    toppings: yup.string(),
    crust: yup.string().required("You have to choose a crust."),
    specialInstructions: yup.string(),
    numberOfPizzas: yup
        .string()
        .required("Order a pizza, I wont delever no pizza to your address.")
});

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
    useEffect(() => {
        formSchema.isValid(formState).then(valid => {
            setButtonOn(!valid);
        });
    }, [formState]);

    const validateChange = event => {
        yup.reach(formSchema, event.target.name)
            .validate(event.target.value)
            .then(valid => {
                setError({
                    ...error,
                    [event.target.name]: ""
                });
            })
            .catch(err => {
                setError({
                    ...error,
                    [event.target.name]: err.errors[0]
                });
            });
    };
    const formSubmit = e => {
        e.preventDefault();
        console.log("form submitted!");
        axios
            .post("https://reqres.in/api/users", formState)
            .then(res => {
                setPost(res.data);
                console.log("success", post);

                setFormState({
                    size: "",
                    sauce: "",
                    toppings: "",
                    crust: "",
                    specialInstructions: "",
                    numberOfPizzas: ""
                });
            })
            .catch(err => {
                console.log(err.res);
            });
    };
    const inputChange = event => {
        event.persist();
        const newerFormData = {
            ...formState,
            [event.target.name]:
                event.target.type === "checkbox"
                    ? event.target.checked
                    : event.target.value
        };
        validateChange(event);
        setFormState(newerFormData);
    };

    return (
        <form onSubmit={formSubmit}>
            <div>
                <label htmlFor="size">
                    <h4>Select your crust:</h4>
                </label>
                <select
                    name="size"
                    id="size"
                    value={formState.name}
                    onChange={inputChange}
                >
                    <option label="Select Size" value={null} />
                    <option id="large">Large</option>
                    <option id="medium">Medium</option>
                    <option id="small">Small</option>
                </select>
            </div>

            <div>
                <h4>Pizza Sauce</h4>
                <label
                    htmlFor="pizzaSauce"
                    value={formState.name}
                    onChange={inputChange}
                >
                    {/* Change */}
                    <p>Original Sauce</p>
                    {/* Change */}
                    <input
                        id="pizzaSauce" //change
                        type="radio" //same
                        name="sauce" //same
                        value="Pizza Sauce" //change
                    />
                </label>
                <label
                    htmlFor="pizzaSauce"
                    value={formState.name}
                    onChange={inputChange}
                >
                    <p>Healthy Sauce</p>
                    <input
                        id="healthySauce"
                        type="radio"
                        name="sauce"
                        value="Healthy Sauce"
                    />
                </label>
                <label
                    htmlFor="garlicSauce"
                    value={formState.name}
                    onChange={inputChange}
                >
                    <p>Garlic Parmesan Sauce</p>
                    <input
                        id="garlicSauce"
                        type="radio"
                        name="sauce"
                        value="Garlic Parmesan Sauce"
                    />
                </label>
                <label
                    htmlFor="bbqSauce"
                    value={formState.name}
                    onChange={inputChange}
                >
                    <p>BBQ Sauce</p>
                    <input
                        id="bbqSauce"
                        type="radio"
                        name="sauce"
                        value="BBQ Sauce"
                    />
                </label>
                <label
                    htmlFor="alfredoSauce"
                    value={formState.name}
                    onChange={inputChange}
                >
                    <p>Alfredo Sauce</p>
                    <input
                        id="alfredoSauce"
                        type="radio"
                        name="sauce"
                        value="Alfredo Sauce"
                    />
                </label>
            </div>
            <div>
                <h3>Select your toppings:</h3>
                <p>
                    You can select multiple. (Any toppings after the 4th topping
                    is extra.)
                </p>
                <label htmlFor="pepperoni">Pepperoni</label>
                <input type="checkbox" name="pepperoni" id="pepperoni" />
                <label htmlFor="bacon">Bacon</label>
                <input type="checkbox" name="bacon" id="bacon" />
                <label htmlFor="chicken">Chicken</label>
                <input type="checkbox" name="chicken" id="chicken" />
                <label htmlFor="itSausage">Italian Sausage</label>
                <input type="checkbox" name="itSausage" id="itSausage" />
                <label htmlFor="sausage">Sausage</label>
                <input type="checkbox" name="sausage" id="sausage" />
                <label htmlFor="beef">Beef</label>
                <input type="checkbox" name="beef" id="beef" />
                <label htmlFor="salami">Salami</label>
                <input type="checkbox" name="salami" id="salami" />
                <label htmlFor="ham">Ham</label>
                <input type="checkbox" name="ham" id="ham" />
                <label htmlFor="phillySteak">Philly Steak</label>
                <input type="checkbox" name="phillySteak" id="phillySteak" />
            </div>
            <div>
                <label htmlFor="crust">Select your crust: </label>
                <select
                    name="crust"
                    id="crust"
                    value={formState.name}
                    onChange={inputChange}
                >
                    <option label="Select Crust" value={null} />
                    <option value="thick">Thick</option>
                    <option value="thin">Thin</option>
                    <option value="glutenFree">Gluten Free</option>
                </select>
            </div>
            <div>
                <label for="specInstructs">
                    <h3>Special Instructions</h3>
                    <textarea
                        name="specInstructs"
                        id="specInstructs"
                        cols="40"
                        rows="7"
                    />
                </label>
            </div>
            <div>
                <label for="numberOfPizzas">
                    <h5>Number of Pizzas:</h5>{" "}
                </label>
                <input
                    type="number"
                    name="numberOfPizzas"
                    id="numberOfPizzas"
                    min="1"
                    max="200"
                    step="1"
                    value={formState.name}
                    onChange={inputChange}
                />
            </div>
            <br />
            <pre>{JSON.stringify(post, null, 2)}</pre>

            <div>
                <button type="reset">Reset</button>
                <button id="addToOrder">Add to order!</button>
            </div>
        </form>
    );
}
