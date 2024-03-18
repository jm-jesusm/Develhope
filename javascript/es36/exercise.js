
function repeatHello(callback) {
    const interval = setInterval(callback, 1000)
    setTimeout(clearInterval, 5000, interval)
}

repeatHello(() => {
    console.log("Hello")
})
