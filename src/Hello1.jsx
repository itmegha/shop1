import React from "react";
import ReactDOOM from "react-dom"

const name = "Megha"
const date1 = new Date().toLocaleDateString();
const img1 = "https://picsum.photos/200/300";
function Hello1(){
    return( 
        <div>
    <h1 style = {{color:'pink'}}>This is {name} and todays date is {date1}.</h1>
    <img src = {img1}/>
    </div>
    );
}

export default Hello1;