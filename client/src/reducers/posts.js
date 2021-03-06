const reducer = (posts = [], action) => {
    switch (action.type) {
        case 'CREATE':
            return [...posts, action.payload]
        case 'FETCH_ALL':
            return action.payload;
        case 'UPDATE':
        case 'LIKE':
            return posts.map(post => action.payload._id === post._id ? action.payload : post);
        case 'DELETE':
            return posts.filter(post => action.payload !== post._id);
        default:
            return [...posts]
    }
}

export default reducer;