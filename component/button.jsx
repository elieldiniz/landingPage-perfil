import React from "react";

const  button= (props) => {
    return(
        <button className={props.btn} >
            <p className={props.className} >{props.button}</p>
        </button>
    )
}

export default button