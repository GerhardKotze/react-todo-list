function getId(state) {
    return state.todos.reduce((maxId, todo) =>{
        return Math.max(todo.is, maxId)
    }, -1) + 1
}

export default function reducer(state, action) {
    //best practice is switch statements
    switch(action.type) {
        case 'ADD_TODO':
            Object.assign({}, state, {
                todos: [{
                    text: action.text,
                    completed: false,
                    id: getId(state)
                }, ...state.todos]
            })
        default:
            return state;
    }
}