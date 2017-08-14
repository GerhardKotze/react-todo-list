//var constants = {
//    ADD_TODO: 'ADD_TODO'
//}

export default actions= {
    addTodo(text) {
        return {
            type: 'ADD_TODO',
            text: text
        }
    }
}


//store.dispatch(addTodo('some text'))