import React from "react";

function Breakfast(props) {
    return (
        <div>
            <h1>In breakfast we have {props.meal}</h1>
            <h1>In breakfast we also have {props.drink}</h1>
        </div>
    )
}

export default Breakfast;