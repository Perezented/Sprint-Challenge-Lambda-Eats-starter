import React, { useState, useEffect } from "react";
import * as yup from "yup";
import axios from "axios";

const formSchema = yup.object().shape({
    name: yup.string().required("Name is required"),
    email: yup
        .string()
        .email()
        .required("Email is required"),
    terms: yup.boolean().oneOf([true], "Need to read and accept the terms"),
    password: yup.string().required("Password is required")
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
                <select name="size" id="size">
                    <option
                        label="Select Size"
                        value={null}
                        value={formState.size}
                        onChange={inputChange}
                    />
                    <option
                        label="Large"
                        value="large"
                        value={formState.size}
                        onChange={inputChange}
                    />
                    <option
                        label="Medium"
                        value="medium"
                        value={formState.size}
                        onChange={inputChange}
                    />
                    <option
                        label="Small"
                        value="small"
                        value={formState.size}
                        onChange={inputChange}
                    />
                </select>
            </div>

            <div>
                <h4>Pizza Sauce</h4>
                <label htmlFor="pizzaSauce">
                    {/* Change */}
                    <p>Original Sauce</p>
                    {/* Change */}
                    <input
                        id="pizzaSauce" //change
                        type="radio" //same
                        name="sauce" //same
                        value={formState.sauce} //change                    value={formState.name}
                        onChange={inputChange}
                    />
                </label>
                <label htmlFor="pizzaSauce">
                    <p>Healthy Sauce</p>
                    <input
                        id="healthySauce"
                        type="radio"
                        name="sauce"
                        value={formState.sauce}
                        onChange={inputChange}
                    />
                </label>
                <label htmlFor="garlicSauce">
                    <p>Garlic Parmesan Sauce</p>
                    <input
                        id="garlicSauce"
                        type="radio"
                        name="sauce"
                        value={formState.sauce}
                        onChange={inputChange}
                    />
                </label>
                <label htmlFor="bbqSauce">
                    <p>BBQ Sauce</p>
                    <input
                        id="bbqSauce"
                        type="radio"
                        name="sauce"
                        value={formState.sauce}
                        onChange={inputChange}
                    />
                </label>
                <label htmlFor="alfredoSauce">
                    <p>Alfredo Sauce</p>
                    <input
                        id="alfredoSauce"
                        type="radio"
                        name="sauce"
                        value={formState.sauce}
                        onChange={inputChange}
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
                <input
                    type="checkbox"
                    name="pepperoni"
                    id="pepperoni"
                    value={formState.toppings}
                    onChange={inputChange}
                />
                <label htmlFor="bacon">Bacon</label>
                <input
                    type="checkbox"
                    name="bacon"
                    id="bacon"
                    value={formState.toppings}
                    onChange={inputChange}
                />
                <label htmlFor="chicken">Chicken</label>
                <input
                    type="checkbox"
                    name="chicken"
                    id="chicken"
                    value={formState.toppings}
                    onChange={inputChange}
                />
                <label htmlFor="itSausage">Italian Sausage</label>
                <input
                    type="checkbox"
                    name="itSausage"
                    id="itSausage"
                    value={formState.toppings}
                    onChange={inputChange}
                />
                <label htmlFor="sausage">Sausage</label>
                <input
                    type="checkbox"
                    name="sausage"
                    id="sausage"
                    value={formState.toppings}
                    onChange={inputChange}
                />
                <label htmlFor="beef">Beef</label>
                <input
                    type="checkbox"
                    name="beef"
                    id="beef"
                    value={formState.toppings}
                    onChange={inputChange}
                />
                <label htmlFor="salami">Salami</label>
                <input
                    type="checkbox"
                    name="salami"
                    id="salami"
                    value={formState.toppings}
                    onChange={inputChange}
                />
                <label htmlFor="ham">Ham</label>
                <input
                    type="checkbox"
                    name="ham"
                    id="ham"
                    value={formState.toppings}
                    onChange={inputChange}
                />
                <label htmlFor="phillySteak">Philly Steak</label>
                <input
                    type="checkbox"
                    name="phillySteak"
                    id="phillySteak"
                    value={formState.toppings}
                    onChange={inputChange}
                />
            </div>
            <div>
                <label htmlFor="crust">Select your crust:</label>
                <select
                    name="crust"
                    id="crust"
                    value={formState.crust}
                    onChange={inputChange}
                >
                    <option label="Select Crust" value={null} />
                    <option label="Thick" value="thick" />
                    <option label="Thin" value="thin" />
                    <option label="Gluten Free" value="glutenFree" />
                </select>
            </div>
            <div>
                <label for="specInstructs">
                    <h3>Special Instructions</h3>
                </label>
                <textarea
                    name="specInstructs"
                    id="specInstructs"
                    cols="40"
                    rows="7"
                />
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
                    value={formState.numberOfPizzas}
                    onChange={inputChange}
                />
            </div>
            <br />
            <pre>{JSON.stringify(post, null, 2)}</pre>

            <div>
                <button type="reset">Reset</button>
                <button type="submit" disabled={greySubmit}>
                    Add to order!
                </button>
            </div>
        </form>
    );
}
