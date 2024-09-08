const butn = document.querySelector('button');
const span = document.querySelector('span');


butn.addEventListener('click', () => {
    let name = prompt("Please enter your name: ");

    span.textContent = name;

})