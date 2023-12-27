import { useState } from 'react';

// a SearchBar component searches for the specified problem by using the following query
// 1. Problem Name
// 2. Problem Category
// 3. Website / link to problem.

function AddProblem(props) {
    // define state variables for different types of queries
    const [problemField, setProblemField] = useState("");
    const [problemCategory, setProblemCategory] = useState("");
    const [problemLink, setProblemLink] = useState(""); 
    const [problemSite, setProblemSite] = useState("");
    

    
    function addProblemPressed() {
        
        props.addProblemCallback({p1: problemField, p2: problemCategory, p3: problemLink, p4: problemSite});
        // clear search fields
        setProblemField("");
        setProblemCategory("");
        setProblemLink("");
        setProblemSite("");
    }

    return (
        <div className="App search-app">
            
            <form>
                <label htmlFor="problem-field">Problem: </label>
                <input type="text" id="problem-field" value={problemField} 
                onChange={(e) => setProblemField(e.target.value)}/>
                <label htmlFor="problem-category">Category: </label>
                <input type="text" id="problem-category" value={problemCategory} 
                onChange={(e) => setProblemCategory(e.target.value)}/>
                <label htmlFor="problem-link">Difficulty: </label>
                <input type="text" id="problem-link" value={problemLink} 
                onChange={(e) => setProblemLink(e.target.value)}/>
                <label htmlFor="problem-site">Site: </label>
                <input type="text" id="problem-site" value={problemSite} 
                onChange={(e) => setProblemSite(e.target.value)}/>
                <button onClick={addProblemPressed} type="Button">Add Problem</button>
            </form> 
        </div>
    )
}

export default AddProblem;