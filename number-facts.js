const url = 'http://numbersapi.com';

const facts = [];

let randomNumbers = function() {
    const numbers = [];
    for (let i=0; i<4; i++) {
        numbers.push(Math.floor(Math.random() * 100));
    }
    return numbers;
}

axios.get(`${url}/${randomNumbers()[0]}`)
    .then(res => {
        facts.push(res.data)
        return axios.get(`${url}/${randomNumbers()[1]}`)
    })
    .then(res => {
        facts.push(res.data)
        return axios.get(`${url}/${randomNumbers()[2]}`)
    })
    .then(res => {
        facts.push(res.data)
        return axios.get(`${url}/${randomNumbers()[3]}`)
    })
    .then(res => {
        facts.push(res.data)
        createList()
    })
    .catch(err => console.log("Caught Error", err))

function createList() {
    let ul = document.getElementById('num-list')

    for (let i=0; i<4; i++) {
        let li = document.createElement("li");
        li.innerText = facts[i]
        ul.appendChild(li)
    }
}
