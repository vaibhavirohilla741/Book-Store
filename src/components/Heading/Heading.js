import React from 'react'
import classes from "./Heading.module.css"
const Heading = (props) => {
    return (
        <div className={classes.HeadingContainer}>
            <h2>{props.title}</h2>
            <p>{props.about}</p>
        </div>
    )
}

export default Heading
