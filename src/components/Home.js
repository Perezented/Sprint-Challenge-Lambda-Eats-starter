import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <section>
            <div>
                {" "}
                <p>Home of the square pizza made to fit in your pizza box!</p>
                <p>Order your pizza here!</p>
                <Link to="/pizza/">
                    <button>Order Pizza</button>
                </Link>
            </div>{" "}
        </section>
    );
}
