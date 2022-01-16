import { INC_COUNT, DEC_COUNT } from "./actionTypes";



export const addcount = (count)=>{ 
    return {
        type : INC_COUNT,
    payload : count,
    }  //object  
}

export const deccount = (count)=>{ 
    return {
        type : DEC_COUNT,
    payload : count,
    }  //object 
}