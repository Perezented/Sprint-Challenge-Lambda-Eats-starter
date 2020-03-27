import React, { useState, useEffect } from "react";

export default function Form() {
    const [formState, setFormState] = useState({
        size: '',
        sauce: '',
        toppings: '', 
        crust: '',
        specialInstructions: '',
        numberOfPizzas: '',
    })
    const [error, setError] = useState({
        size: '',
        sauce: '',
        toppings: '',
        crust: '',
        specialInstructions: '',
        numberOfPizzas: '',
    })
    const [post, setPost] = useState([]);
    const [greySubmit, setButtonOn] = useState(true);
    

    return null;
}
