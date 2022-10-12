let data = JSON.parse(localStorage.getItem("inputData"));
document.querySelector('form').addEventListener('submit', loginFxn)
let loginData = [];
function loginFxn(e) {
    e.preventDefault();

    var obj = {};

    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    // let username = document.querySelector('#name').value


    obj.email = email;
    obj.password = password;
    // obj.username = username;

    let present = data.filter(function (e) {
        return email == e.email && password == e.password
    })

    loginData.push(obj);
    console.log(data);

    localStorage.setItem('loginData', JSON.stringify(loginData))

    if (present.length == 0) {
        alert("wrong details entered");
    }
    else {
        alert("Login Sucessfully");

        window.location.href = 'Navbar.html';
    }


}