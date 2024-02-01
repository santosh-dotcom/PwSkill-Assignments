function greetPromise(name) {
    return new Promise(function (resolve) {
        const greet = `Hello ${name}`;
        resolve(greet);
    })
}

greetPromise("Samir").then((greet) => {
    console.log(greet);
});