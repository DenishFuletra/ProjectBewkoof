let data = JSON.parse(localStorage.getItem("inputData"));
document.querySelector('form').addEventListener('submit', loginFxn)
let loginData = [];
function loginFxn(e) {
    e.preventDefault();



    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    // let username = document.querySelector('#name').value
    let present = data.filter(function (e) {
        if(email == e.email && password == e.password){
            return e;
        }
    })

    
    console.log(present);

    localStorage.setItem("loginData", JSON.stringify(present))

    if (present.length == 0) {
        alert("wrong details entered");
    }
    else {
        alert("Login Sucessfully");

        window.location.href = 'Navbar.html';
    }


}