import {getUserHistory, getUserInfo} from '../api';

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

export const fetchUser = (user) => {
    return (dispatch) => {
        return getUserInfo()
            .then((res) => {
                dispatch('USER_FETCH_SUCCEEDED', user);
            })
            .catch((error) => {
                console.log(error);
            });
    };
};
