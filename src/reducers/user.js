const user = (state = {
    'name': null,
    'age': null
}, action) => {
    switch (action.type) {
        case 'USER_FETCH_SUCCEEDED':
            console.log('Class: , Function: user, Line 7 (): ', action.user);
            return {
                ...action.user
            };
        default:
            return state;
    }
};

export default user;
