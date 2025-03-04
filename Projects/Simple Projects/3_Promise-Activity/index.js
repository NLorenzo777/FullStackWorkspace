function displayData(data) {
    document.getElementById("demo").innerHTML = data;
}

function startJavaScript() {
    let myPromise = new Promise((resolve, reject) => {

        resolve("Hello from Promise");
    }) 

    myPromise.then(
        (val) => { displayData(val);},
        (err) => { displayData(err)}
    );
}

async function myAsync() {
    return "Hello from Asynchronous function";
}

function startAsync() {
    myAsync().then(
        (val) => { displayData(val); },
        (err) => { displayData(err); }
    );
}