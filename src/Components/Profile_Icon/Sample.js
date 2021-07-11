
import React,{useState} from 'react'

function Sample (){
    const [state,setState] = useState({
        save:false
    })
    const handleSubmit = () => {
        setState({save:!state.save})
    }
    return(
        <div>
            {state.save ? "Card is visible": null}
            <button onClick={handleSubmit}>click me</button>
        </div>
    )
}

export default Sample