import {INC_COUNT, DEC_COUNT} from "./actionTypes.js"

 export const inCount = (data) => {
    return {type: INC_COUNT, payload: data}
}
