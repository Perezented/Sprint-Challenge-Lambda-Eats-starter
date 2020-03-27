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
            <div>
                <h3>Select your toppings:</h3>
                <p>
                    You can select multiple. (Any toppings after 3 topping is
                    extra.)
                </p>
                <label htmlFor="pepperoni">Pepperoni</label>
                <input type="checkbox" name="pepperoni" id="pepperoni" />
                <label htmlFor="bacon">Bacon</label>
                <input type="checkbox" name="bacon" id="bacon" />
                <label htmlFor="chicken">chicken</label>
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
                <label htmlFor="crust">Select your crust:</label>
                <select name="crust" id="crust">
                    <option label="Thick" value="thick" />
                    <option label="Thin" value="thin" />
                    <option label="Gluten Free" value="glutenFree" />
                </select>
            </div>
            <div>
                <label for="specInstructs">
                    <h3>Special Instructions</h3>
                </div>
                <textarea
                    name="specInstructs"
                    id="specInstructs"
                    cols="40"
                    rows="7"
                />
            </label>
        </form>
    );
}
