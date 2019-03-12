import {getUserHistory} from '../api';

export const fetchUserHistory = () => {
    return (dispatch) => {
        getUserHistory()
            .then((res) => {
                const data = res.data;
                dispatch('USER_HISTORY_FETCH_SUCCEEDED', data.history);
            })
            .catch((error) => {
                console.log(error);
            });
    };
};
