const user = (state = {
    'name': 'xxx',
    'age': 111
}, action) => {
    switch (action.type) {
        case 'USER_FETCH_SUCCEEDED':
            return {
                ...action.user
            };
        default:
            return state;
    }
};

export default user;
