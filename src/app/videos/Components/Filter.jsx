import React from "react";

const Filter= ({setFilter}) =>{
    return(
        <div style={{marginBottom:"20px"}}>
            <h1>Filter Videos</h1>
            <button onClick={() => setFilter("Promotion")} >Promotion</button>
            <button onClick={() => setFilter("Highlights") }>City Highlights</button>
            <button onClick={() => setFilter("Other")}>Other</button>
        </div>
    )
}

export default Filter;