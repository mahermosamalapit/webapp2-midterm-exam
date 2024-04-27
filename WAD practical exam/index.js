// Task 1: Simple synchronous code (5 marks)
// 1. Create a straightforward synchronous code snippet that displays this output
// in the console.

console.log('statement 1');
console.log('statement 2');
console.log('statement 3');
console.log('statement 4');


// Task 2: Simple asynchronous code (5 marks)
// 1. Create a straightforward asynchronous code snippet utilizing the
// setTimeout() function to display the following output in the console.

console.log('statement 1');
console.log('statement 2');

 setTimeout (() => {
    console.log( 'callback function is fired');
 }, 3000);

 console.log('statement 3');
 console.log('statement 4');



 
//  Task 3: Simple Http Request using XMLHttpRequest (5 marks)
// 1. Fill in the missing parts of the code to produce the specified output.

const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    
    if (request.readyState === 4) {
        console.log(request.responseText);
    }
});
    
request.open ('GET', 'https://jsonplaceholder.typicode.com/todos/1');
request.send();



// Task 4: Using a simple callback, return a json response (5marks)
// 1. Fill in the missing parts of the code to produce the specified output.

const getTodos1 = (callback) => {
const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
        callback (undefined, request.responseText);
    } else if (request.readyState === 4) {
        callback('could not fetch data', undefined);
    }
});

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1')
    request.send();
}
    
getTodos1((err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});




// Task 5: Using Promise, return a json response (5 marks)
// 1. Fill in the missing parts of the code to produce the specified output.

const getTodos2 = () => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        
        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if (request.readyState === 4) {
                reject('could not fetch data');
            }
        });
        
        request.open('GET', 'https://jsonplaceholder.typicode.com/todos/1')
        request.send();
    });
}
getTodos2().then(data => {
    console.log('promise resolved:', data);
}).catch(err => {
    console.log('promise rejected:', err);
});




// Task 6: Using Fetch, return a json response (5 marks)
// 1. Fill in the missing parts of the code to produce the specified output.

fetch( 'https://jsonplaceholder.typicode.com/todos/1').then(response => {
    console.log('resolved:', response);
    return data = response.json();
}).then(data => {
    console.log('data:', data);
}).catch(err => {
    console.log('rejected:', err);
});




// Task 7 (Optional): Using async and await, return a json response (+5 additional marks if answered correctly)
// 1. Fill in the missing parts of the code to produce the specified output.

const getTodos3 = async () => {
const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    if (response.status !== 200) {
        throw new Error('cannot fetch the data');
    }
    
    const data = await response.json();
    return data;
}

getTodos3()
.then(data => console.log('resolved:', data))
.catch(err => console.log('rejected:', err.message));
