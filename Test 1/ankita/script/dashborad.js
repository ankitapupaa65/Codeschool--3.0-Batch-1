
function sidebar(){

document.getElementById('sideBar').classList.toggle('d-none');
document.getElementById('mainContent').classList.toggle('col-12');


}


function addEmployee(){
 window.location.replace("http://localhost/testday/addEmployee.html");

}
let userInfo;
userInfo = localStorage.getItem('user_info');
userInfo = JSON.parse(userInfo );

console.log(userInfo,1234);
let token;
token = localStorage.getItem('token');
token = JSON.parse(token );


// if(userInfo==0){
//  alert('plz do login');
//  window.location.replace("http://localhost/testday/logIn.html");


// }
if (userInfo) {

  $('#logInButton').empty();

  $('#registerButton').empty();


 


 
  
}


else {

 alert("you are  not logged in to this page  ");
 window.location.replace("http://localhost/testday/logIn.html");
  $('#logOutButton').empty();

}

function login() {
    window.location.replace("http://localhost/testday/logIn.html");
}

function register() {
    window.location.replace("http://localhost/testday/register.html");
}
function logout() {
    localStorage.removeItem('user_info');
    localStorage.removeItem('token');
    alert("logout successfully");
    window.location.replace('http://localhost/testday/logIn.html');



}


let formData = {
    user_id: userInfo.id,
    token: token
}

$.ajax({
    url: 'api/vaildateUser.php',
    method: 'POST',
    dataType: 'json',
    data: formData,
    success: function (data) {
        alert(data.message, " ", "success");
        if (!data.status) {
            localStorage.clear();
            window.location.replace("http://localhost/testday/logIn.html");
        } else {


        }

    },
    error: function (status) {
        console.log('Request failed with status: ' + status);
    }
});