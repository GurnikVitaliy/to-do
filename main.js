const btnAdd = document.querySelector('#add');
const infoLeft = document.querySelector('.info__left');
const infoRightBtn = document.querySelector('.info__right');
const input = document.getElementById('input');
const reset = document.getElementById('reset');

let arr = [];

localStorage.length < 1 ? arr = [] : arr = JSON.parse(localStorage.getItem('data'));


const createIt = n => {

    const li = document.createElement('div');
           li.innerHTML = n.name;
           li.classList.add('il');
           infoLeft.append(li);

    const btnDel = document.createElement('button');
           btnDel.innerHTML = 'x';
           btnDel.classList.add('btnDel');
           li.append = btnDel;
           infoRightBtn.append(btnDel);
    
    btnDel.addEventListener('click', () => {
        li.remove();
        btnDel.remove();
    })       

    reset.addEventListener('click', () => {
        localStorage.clear();
    })
    
        
}    

for(let el of arr) {
    createIt(el);
}


btnAdd.addEventListener('click', function() {
    let inp = input.value;
    
    const user = {
        name : inp
    }

    arr.push(user);
    localStorage.setItem('data', JSON.stringify(arr));

    createIt(user);

    input.value = '';
})