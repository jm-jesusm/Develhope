const number = 15;

const promise = new Promise((resolve, reject) => {
    if(number > 10)
        resolve(number)
    reject(new Error(`The number introduced (${number}) is not greater than 10`))
})

promise
    .then((res) => {
        console.log(`The number introduced (${res}) is greater than 10`)
    })
    .catch((err) => {
        console.error(err.message)
    })
    .finally(() => {
        console.log("Closing console. Bye!")
    })
