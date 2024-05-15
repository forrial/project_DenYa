let button = document.getElementById('submitButton');
let name = document.getElementById('name');
let email = document.getElementById('email');
let tel = document.getElementById('phone');
let message = document.getElementById('message');

button.addEventListener('click', function( event ) {

    let data = {
        name: name.value,
        email: email.value,
        tel: tel.value,
        message: message.value
    };

    if (name.value == '' || email.value == '' || tel.value == '' || message.value == '') {
        alert("Please, fill in all fields");
        return;
    };

    if ( !name.value.match(/^[A-Za-z- ]+$/) ) {
        alert("Please, fill in NAME correctly");
        return;
    }

    if ( !tel.value.match(/^\+?[0-9]+$/) || tel.value.length > 11 ) {
        alert("Please, fill in PHONE NUMBER correctly");
        return;
    }

    if ( !email.value.match(/\S+@\S+\.\S+/) ) {
        alert("Please, fill in E-MAIL correctly");
        return;
    }

    fetch('http://localhost:3000/contact/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then( function(response){ 
         return response.json(); 
    })
    
    .then( function(data){

        name.value = ''; 
        email.value = ''; 
        tel.value = ''; 
        message.value = ''; 

        name.focus();
        
        alert('The message was sent successfully');

    })
    .catch( function(error){ 
        alert('An error has occurred!');
        console.log(error)
    });
});

