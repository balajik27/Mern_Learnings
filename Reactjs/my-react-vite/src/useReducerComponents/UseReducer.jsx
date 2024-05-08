import { useReducer } from "react"

function reducer(){
    
}

export const UseReducer = () =>{

    const initialState = [];

    const [state , dispatch] = useReducer(reducer , initialState);

    return(
        <>
            <h1>Hello</h1>
        </>
    )
}