import React from "react";

function Form  () {
    return (
    <div>
       <form className=" mt-3">
        
        
        <label>
            
           
            date:
            <input type="date"id="date"/>
            </label><label>
            description:
            <input type="description"id="description"/>
            </label>
            <label>
            category:
            <input type="Categories"id="Categories"/>
            </label>
            <label>
            amount:
            <input type="number"id="number"/>
            </label>
                                            
                  
       </form>
    </div>  
    );
}

export default Form;