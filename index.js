window.addEventListener("load", ()=>{
    password = document.querySelector("#password")
    password_noti = document.querySelector('#password_p')
    confirm_password = document.querySelector("#confirm_password")
    submit = document.querySelector('button[type="submit"]')
    password.addEventListener("input", () =>{
        console.log(password.value)
        console.log(confirm_password.value)
        if(password.value !== confirm_password.value){
            password_noti.hidden=false;
            submit.disabled=true;
        }
        else{
            password_noti.hidden=true;
            submit.disabled=false;
        }
    })
    confirm_password.addEventListener("input", () =>{
        if(password.value !== confirm_password.value){
            password_noti.hidden=false;
            submit.disabled=true;
        }
        else{
            password_noti.hidden=true;
            submit.disabled=false;
        }
    })
});