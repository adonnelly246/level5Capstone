import React, {useState} from 'react'

export default function Form(props){
    const initInputs = {
        title: props.title || "", 
        players: props.players || "",
        price: props.price || "",
        category: props.category || "",
        console: props.console || "",
        rating: props.rating || "",
        searchTerm: props.searchTerm || ""

    }

    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e){
        const {name, value} = e.target
        setInputs(prevInputs =>({...prevInputs, [name]: value}))
    }
    function handleSubmit(e){
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }


    return(
        <form onSubmit= {handleSubmit}>
            <input 
                type="text" 
                name="searchTerm" 
                value={inputs.searchTerm} 
                onChange={handleChange} 
                placeholder="Search">
            </input>

        <select id = "dropdown" onChange ={handleChange}  >  
            <option> ---Search By--- </option>  
            <option value={inputs.title}> Title </option>  
            <option value={inputs.category}> Category </option>  
            <option value={inputs.console}> Console </option>  
            <option value={inputs.rating}> Rating </option>  
        </select>  

            <button >{props.btnText}</button>

        </form>
    )
    
}