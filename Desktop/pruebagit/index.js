let login = false;
let user = "martin";
let pass = "1234";
let userName = prompt("Ingrese su usuario");
let password = prompt("Ingrese su contraseña");

const signIn = (userName, password, user, pass) => {
    if (userName === user && password === pass) {
        alert(`¡Bienvenido ${user}, lo estábamos esperando!`)
        login = true;
    } else {
        alert(`Usuario y/o contraseña incorrectos.`)
    }
}

signIn(userName,password,user,pass);