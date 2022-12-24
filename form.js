token = "";
function getToken(){
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    const jwtRequest = {
        username: username.value,
        password: password.value
    }
    // if(username.value == "admin" && password.value == "admin"){
    //     token = "admin";
    // }
    // if(token != ""){
    //     console.log(token);
    // }   
    // else 
    //     console.log("xxx");

    const login = {
        url: "http://localhost:8080/auth",
        method: 'post',
        data: jwtRequest
    };

    axios(login)
    .then(response=>{
        localStorage.setItem("token",response.data.jwtToken)
        console.log(localStorage.getItem("token"));
    }).catch(e => {
        console.log(e)
    });  
}

window.addEventListener("load", () =>{
    if(localStorage.getItem("token") != ""){
      window.location.href="/index.html";
    }
})