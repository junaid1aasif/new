function show(){
    let arr = ["omni", "marshal", "nano", "jeep", "scorpio", "bolero", "venue", "creta"];
    let html = "";
    let car = document.getElementById("car");
    for(i=0; i<arr.length; i++){
        html+= `<option value=${arr[i]}>${arr[i]}</option>`
    }
    
    car.innerHTML += html
}
show();

let validEmail = false;
let validPhone = false;
let validName = false;
const nameG = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

nameG.addEventListener('blur', function(){

    let regex = /^[a-zA-Z]([0-9a-zA-Z]){3,10}$/;
    let str = nameG.value;
    if(regex.test(str)){
        validName = true;
        nameG.classList.remove('is-invalid') 
    }
    else{
        validName = false;
        nameG.classList.add('is-invalid') 
    }
});

email.addEventListener('blur', function(){
   
    let regex = /^([0-9a-zA-Z_\-\.]+)@([0-9a-zA-Z_\-\.]+)\.([a-zA-Z]){2,8}$/;
    let str = email.value;
    console.log(regex.exec(str))
    if(regex.test(str)){
        validEmail = true;
        email.classList.remove('is-invalid') 
    }
    else{
        validEmail = false;
        email.classList.add('is-invalid') 
    }
});

phone.addEventListener('blur', function(){
   
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
 
    if(regex.test(str)){
        validPhone = true;
        phone.classList.remove('is-invalid') 
    }
    else{
        validPhone = false;
        phone.classList.add('is-invalid') 
    }
});

let submit = document.getElementById('submit');
submit.addEventListener('click', (e)=>{
    e.preventDefault();
    if(validEmail && validName && validPhone){
        let success = document.getElementById('success');
        success.style.display = 'block';
        setTimeout(() => {
            success.style.display = 'none';
        }, 3000);
    }
    else{
        let failure = document.getElementById('failure');
        failure.style.display = 'block';
        setTimeout(() => {
            failure.style.display = 'none'
        }, 3000);
    }
})