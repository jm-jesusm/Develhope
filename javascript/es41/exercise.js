const addTodo = async () => {
    const todo = {
        title: "Have dinner",
        completed: true
    }

    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {
            "Content-Type": "application/json"
        }
    })


    const responseJson = await response.json();

    console.log(responseJson)
}

addTodo()