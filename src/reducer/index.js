import { FETCH_CURRENCY_START, FETCH_CURRENCY_SUCCESS, FETCH_CURRENCY_FAILURE } from "../actions";

const initialState = {
    currency: [],
    error: '',
    isFetching: false
};


function reducer(state = initialState, actions) {
    console.log('reducer', actions);
    switch (actions.type){
        case FETCH_CURRENCY_START:
            console.log('were here')
            return {
                ...state,
                error: '',
                isFetching: true,
            };
            case FETCH_CURRENCY_SUCCESS:
                return {
                    ...state,
                    error: '',
                    isFetching: false,
                    currency: actions.payload
                }
            case FETCH_CURRENCY_FAILURE:
                return {
                    ...state,
                    error: actions.payload,
                    isFetching: false,
                }
            default:
                return state;
    }
   }
   export default reducer
 