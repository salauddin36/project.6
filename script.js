function validate(){

    let name=document.getElementById('username').value;
    let email=document.getElementById('useremail').value;
    let pass=document.getElementById('userpass').value;

    let errorname=document.getElementById('errorName');
    let erroremail=document.getElementById('errorEmail');
    let errorpass=document.getElementById('errorPass');

    let passed=document.getElementById('Passed');

    if(name==''){
        errorname.innerHTML='Please Enter Name '+' <i class="fa-sharp fa-solid fa-circle-exclamation"></i>';
    }
    else if(name!=''){
        errorname.innerHTML='<i class="fa-solid fa-check"></i>';
        errorname.style.color="greenyellow";
    }

    if(email==''){
        erroremail.innerHTML="Please Enter Email "+' <i class="fa-sharp fa-solid fa-circle-exclamation"></i>';
    }
    else if(email!=''){
        erroremail.innerHTML='<i class="fa-solid fa-check"></i>';
        erroremail.style.color="greenyellow";
    }


    if(pass==''){
        errorpass.innerHTML="Please Enter Password "+' <i class="fa-sharp fa-solid fa-circle-exclamation"></i>';
    }
    else if(pass.length<6){
        errorpass.innerHTML="Password should be atlease 6 digits "+' <i class="fa-sharp fa-solid fa-circle-exclamation"></i>';
    }
    else if(pass.length>=6) {
        errorpass.innerHTML='<i class="fa-solid fa-check"></i>';
        errorpass.style.color="greenyellow";
    }
    
    if(name!='' && email!='' && pass.length>=6){
        alert('Thank You : '+ name + '\n' + " - Salauddin Ayubi");
        passed.innerHTML="Your Response has been recorded : "+name+' <i class="fa-solid fa-check"></i>';
    }
}