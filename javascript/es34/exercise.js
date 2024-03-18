function printAsyncName(name) {
    setTimeout(console.log, 1000, "Hello")
    setTimeout(console.log, 2000, name)
}

printAsyncName('Jesus')