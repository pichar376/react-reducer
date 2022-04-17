import { useReducer } from "react"
import { TYPES } from "../actions/contadorActions"
import { contadorInit, contadorInitialState, contadorReducer } from "../reducers/contadorReducers"




const Contador = () => {
const [state,dispatch]=useReducer(contadorReducer,contadorInitialState,contadorInit)
  
const sumar=()=>dispatch({type:TYPES.INCREMENT})
const sumar_5=()=>dispatch({type:TYPES.INCREMENT_5,payload:5})
const reset=()=>dispatch({type:TYPES.RESET})
const restar=()=>dispatch({type:TYPES.DECREMENT})
const restar_5=()=>dispatch({type:TYPES.DECREMENT_5,payload:5})
  return (
    <div>
      <h1>{state.contador}</h1>
    <nav>
    <button onClick={restar}>-</button>
    <button onClick={restar_5}>-5</button>
    <button onClick={reset}>0</button>
    <button onClick={sumar_5}>+5</button>
    <button onClick={sumar}>+</button></nav>
    </div>
    );
}
 
export default Contador;