const fname = document.querySelector('#fName')
const lname = document.querySelector('#lName')
const email = document.querySelector('#email');
const button = document.querySelector('#submit')
const msg = document.querySelector('.error')
const msg1 = document.querySelector('.error1')
const msg2 = document.querySelector('.error2')
const msg3 = document.querySelector('.error3')


button.addEventListener('click',function(e){
    e.preventDefault();

    if(fname.value===""){
        console.log('hello')
        msg.textContent ='first name cannot be empty'
        fname.classList.add('input-photo')


    }
    if(lname.value===""){
        console.log('hello')
    lname.classList.add('input-photo')

        msg1.textContent ='last name cannot be empty'


    }
    if(email.value===""){
        console.log('hello')
    email.classList.add('input-photo')

        msg2.textContent ='email cannot be empty'


    }
    
    if(password.value===""){
        console.log('hello')
    password.classList.add('input-photo')

        msg3.textContent ='password cannot be empty'


    }
})