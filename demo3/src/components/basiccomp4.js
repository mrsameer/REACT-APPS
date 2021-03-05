import React from "react";

// function Basiccomp4(params) {
//     return(
//         React.createElement('div', {id:'sample', className:'first'}, 'hello')
//     )
// }

function Basiccomp4(params) {
    
    return(
        <div>
            <h1>This is sameer</h1>
            <h1> This is basic component</h1>
            <label htmlFor = "uname">username</label>
            <br></br>
            <input type = "text" id = "uname"/>
        </div>
    )
}

/*
    Difference betwen jsx and html 
    ==============================
    htmlFor  --- for 
    className --- class
*/
export default Basiccomp4; 