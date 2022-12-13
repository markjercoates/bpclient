const fuelReducer = (state, action ) => {
    switch(action.type) {
        case 'GET_SITES':
            return {
                ...state,
                sites: action.payload,
            }
        case 'GET_SITE':
            return {
                ...state,
                site: action.payload.site
            }
        default:
            return state
    }
}

export default fuelReducer;
