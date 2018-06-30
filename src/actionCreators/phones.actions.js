import axios from 'axios';
import { begin, end, pendingTask } from 'react-redux-spinner';
const getPhones = () => {
    return dispatch => {
        // This timeout emulates the delay call time from server
        dispatch({
            type: 'SET_PHONES',
            [pendingTask]: begin,
        });
        setTimeout(() => {
            axios.get('http://localhost:3001/phones')
                .then(response => {
                    const data = response.data;
                    const phonesHash = data.reduce((obj, value) => {
                        obj[value.id] = value;
                        return obj;
                    }, {});

                    dispatch({
                        phonesHash,
                        type: 'SET_PHONES',
                        phones: response.data,
                        [pendingTask]: end,
                    });
                });
        }, 1500);
    };
};


export { getPhones };