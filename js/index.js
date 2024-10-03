'use strict'
let discontainer=document.querySelector('.container');
let login=document.querySelector('.login');
let logsubmit=document.querySelector('.sub');
let username=document.querySelector('.username')
let password=document.querySelector('.password')
let disname=document.querySelector('.disname')
let errordis=document.querySelector('.errordis')
let loginform=document.querySelector('.login-form')
let check=0
let arrrr=[]
function displayStoredUsername() {
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
        const usernameValue = JSON.parse(storedUsername);
        username.value = usernameValue;
        greetUser(usernameValue); 
    }
}


logsubmit.addEventListener('click',function(e){

   e.preventDefault();

   const storedUsername = localStorage.getItem('username');
   if (storedUsername) {
       greetUser(JSON.parse(storedUsername));
    }
    else{
    if(username.value.length>1 && password.value.length>1){
     arrrr.push(username.value)
    greetUser(username.value)
    let usrname=arrrr[0]
    localStorage.setItem('username',JSON.stringify(usrname))
      arrrr.push(username.value);
      username.value=password.value='';
      username.blur();
      password.blur();
      check=-1;
      
    
  }
  else{
      if(!(check===-1)) {
          errordis.style.display='block';
      }
        }}
  })
  
  function succes(e){
       alert('Details submitted successfully')
}

function greetUser(username){
    disname.style.color='#9BEC00'
    disname.textContent= `Welcome back, ${username.charAt(0).toUpperCase() + username.slice(1)}! Your next adventure awaits!`
    errordis.style.display=loginform.style.display='none';
}
displayStoredUsername();

   