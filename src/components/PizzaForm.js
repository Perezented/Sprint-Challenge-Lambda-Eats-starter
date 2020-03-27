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
            <div>
                <label htmlFor="size">
                    <h4>Select your crust:</h4>
                </label>
                <select name="size" id="size">
                    <option label="Select Size" value={null} />
                    <option label="Large" value="large" />
                    <option label="Medium" value="medium" />
                    <option label="Small" value="small" />
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
                        value="Pizza Sauce" //change
                    />
                </label>
                <label htmlFor="pizzaSauce">
                    <p>Healthy Sauce</p>
                    <input
                        id="healthySauce"
                        type="radio"
                        name="sauce"
                        value="Healthy Sauce"
                    />
                </label>
                <label htmlFor="garlicSauce">
                    <p>Garlic Parmesan Sauce</p>
                    <input
                        id="garlicSauce"
                        type="radio"
                        name="sauce"
                        value="Garlic Parmesan Sauce"
                    />
                </label>
                <label htmlFor="bbqSauce">
                    <p>BBQ Sauce</p>
                    <input
                        id="bbqSauce"
                        type="radio"
                        name="sauce"
                        value="BBQ Sauce"
                    />
                </label>
                <label htmlFor="alfredoSauce">
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
                <label htmlFor="crust">Select your crust:</label>
                <select name="crust" id="crust">
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
                <label for="pizzaNumber">
                    <h5>Number of Pizzas:</h5>{" "}
                </label>
                <input
                    type="number"
                    name="pizzaNumber"
                    id="pizzaNumber"
                    min="1"
                    max="200"
                    step="1"
                />
            </div>
            <div>
                <button type="reset">Reset</button>
                <button type="submit">Add To Order</button>
            </div>
        </form>
    );
}
