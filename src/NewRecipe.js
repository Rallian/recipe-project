import React, {useState} from "react";

function NewRecipe({name, cuisine, photo, ingredients, preparation}){
    const [active, setActive] = useState(true)
    
    const handleDelete = (event) =>{
        event.preventDefault();
        setActive(false);
    }
    if (active){
        return (
            <>
            <td>{name}</td>
            <td>{cuisine}</td>
            <td><img src={photo} alt="" /> </td>
            <td className="content_td"><p>{ingredients}</p></td>
            <td className="content_td"><p>{preparation}</p></td>
            <td>
            <button type="submit" name="delete" onClick={handleDelete}>Delete</button>
            </td>
            </>
            
        )
    }else{
        return null;
    }
}


export default NewRecipe