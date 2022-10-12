document.querySelector('form').addEventListener('submit', formPage);


let data = JSON.parse(localStorage.getItem('inputData')) || [];
function formPage(e) {
    e.preventDefault();
    let obj = {};

    let name = document.querySelector('#name').value;
    let number = document.querySelector('#number').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;


    obj.name = name;
    obj.number = number;
    obj.email = email;
    obj.password = password;


    data.push(obj);

    localStorage.setItem('inputData', JSON.stringify(data))
    alert("Signing up Succesfflly")
    // console.log(data);
    window.location = 'login.html';

}