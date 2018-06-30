const initState = { phones: [], phonesHash: {} };
export default (state = initState, action) => {
    console.log('Reducer ', state, action);
    switch (action.type) {
        case 'SET_PHONES':
            return {
                ...state,
                phones: action.phones || [],
                phonesHash: action.phonesHash || {},
            };
        default:
            return state;
    }
};
