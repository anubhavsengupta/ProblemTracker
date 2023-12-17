import { useState } from 'react';


// DisplayProblem is a component that displays a list of all the problems that have been added.

function DisplayProblem(props) {
    console.log(props);
    return (
        <div>
           {props.info.map((item) => {
            console.log(item);
            return <p>Problem: {item.p1}</p>
           })}
        </div>
    )
}

export default DisplayProblem;