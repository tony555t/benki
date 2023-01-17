
import { useState } from "react";

function Form  ({handleformUpdate}) {

    const[formData,setFormData]=useState({
        date:"",
        description:"",
        category:"",
        amount:"",
        

    })
  
    function handleChange(event) {
        const key = event.target.id
        console.log(key)
        setFormData({ 

            ...formData, 
          [key]: event.target.value 
        })
      }

      function handleSubmit(e) {
        
            e.preventDefault()
           handleformUpdate(formData)
           setFormData({ date:"",description:"",  category:"",  amount:"",})
        
        }
      
    console.log (formData)
return (
    <div>
       <form className=" mt-3" onSubmit={handleSubmit}>

        
        
        <label>
            
           
            date:
            <input type="date"id="date" value={formData.date} onChange={handleChange}/>
            </label><label>
            description:
            <input type="description"id="description" value={formData.description} onChange={handleChange}/>
            </label>
            <label>
            category:
            <input type="category"id="category"value={formData.category} onChange={handleChange}/>
            </label>
            <label>
            amount:
            <input type="number"id="amount"value={formData.amount} onChange={handleChange}/>
            </label>
            <label> 
            <button type="submit">submit!</button>  
            </label>                   
                  
       </form>
    </div>  
    );

}
export default Form;