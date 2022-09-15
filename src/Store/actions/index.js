import { GET_LABOURDETAILS, GET_LABOURS, GET_LABOUR_ERROR, SEARCH_LABOUR } from "../actionTypes";

export const FetchList = () => {
    return { type: GET_LABOURS} 
}

export const fetchDetail = () => {
    return { type: GET_LABOURDETAILS}
}

export const FetchError= () => {
    return { type: GET_LABOUR_ERROR } 
}


export const searchLabour=(searchStr = "")=>{
    return {type:SEARCH_LABOUR,payload:searchStr}
}