import { useState } from 'react';


// DisplayProblem is a component that displays a list of all the problems that have been added.

function DisplayProblem(props) {
    if (props.info.length === 0) {
        return null;
    } else {
            return (
                <div>
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Link</th>
                            <th>Site</th>
                        </tr>

                    
                {props.info.map((item) => {
                    
                    if ((item.p1 !== undefined && props.filters === "") || props.filters === item.p1) {
                        return <tr>
                            <td>{item.p1}</td>
                            <td>{item.p2}</td>
                            <td>{item.p3}</td>
                            <td>{item.p4}</td>
                        </tr>
                    }

                    })}
                    </table>
                </div>
            )
        }
}

export default DisplayProblem; 