import {getAddress, getUserHistory} from '../api';
import {setUserInfo} from '../actions';

export const fetchUserHistory = () => {
    return (dispatch) => {
        return getUserHistory()
            .then((res) => {
                const data = res.data;
                dispatch('USER_HISTORY_FETCH_SUCCEEDED', data.history);
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export const fetchUser = (user) => (dispatch) => {
    getAddress()
        .then((res) => {
            dispatch(setUserInfo(user));
        })
        .catch((error) => {
            console.log(error);
        });
};
