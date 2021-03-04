import React from "react"; 

// fucntion so as to create a view with the help of javascript with out using html (jsx)
function Basiccomp() {
    return (
        // generation of this div tag with the help of javascript 
        React.createElement('div', null, React.createElement('h1', null, "This is basic funtion component with only javascript"))
    )
}

export default Basiccomp;  