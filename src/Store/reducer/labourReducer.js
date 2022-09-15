import { GET_LABOURDETAILS, GET_LABOURDETAILS_SUCCESS, GET_LABOURS, GET_LABOURS_SUCCESS, GET_LABOUR_ERROR, SEARCH_LABOUR, SEARCH_LABOUR_SUCCESS } from "../actionTypes"


const initialState = {
        data: [],
        details:'',
        isFetching: false,
        error: false
}

export default labourReducer = (state = initialState, action) => {
        switch (action.type) {
                case GET_LABOURS:
                        return {
                                ...state,
                                data: [],
                                isFetching: true
                        }
                case GET_LABOURS_SUCCESS:
                        return {
                                ...state,
                                isFetching: false,
                                data: action.data
                        }
                case GET_LABOURDETAILS:
                        return {
                                ...state,
                                isFetching: false,
                                error: true,
                                details:null
                        }
                case GET_LABOURDETAILS_SUCCESS:
                        return {
                                ...state,
                                isFetching: false,
                                details: action.data
                        }
                case GET_LABOUR_ERROR:
                        return {
                                ...state,
                                isFetching: false,
                                error: true
                        }
                case SEARCH_LABOUR:
                        return {
                                ...state,
                                data: [],
                                isFetching: true
                        }
                case SEARCH_LABOUR_SUCCESS:
                        return {
                                ...state,
                                isFetching: false,
                                data:{labours:action.data}
                        }
                default:
                        return state
        }
}