const getTodos = async () => {
    const todos = await fetch('https://jsonplaceholder.typicode.com/todos')
    const todosJson = await todos.json()
    console.log(todosJson)
}

getTodos()