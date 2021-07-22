import React from "react"
import "../App.css"
import { useGlobalConetxt} from "./Context";
 const Form=()=>{
     const {query,
        setQuery,error}=useGlobalConetxt();
     return(
         <form className="search-form" onSubmit={(e)=>e.preventDefault()}>
         <h2>Search Movies</h2>
         <input
          type="text"
          className="form-input"
          value={query}
          onChange={(e)=>setQuery(e.target.value)}/>
        {error.show &&<div className="error">{error.msg}</div>}
         </form>
     )
 }
 export default Form;