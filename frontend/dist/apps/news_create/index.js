let button = document.getElementById('submitButton');
let posted_by = document.getElementById('posted_by');
let title = document.getElementById('title');
let subtitle = document.getElementById('subtitle');
let content = document.getElementById('content');

button.addEventListener('click', function( event ) {

    let data = {
        posted_by: posted_by.value,
        title: title.value,
        subtitle: subtitle.value,
        content: content.value
    };

    if (posted_by.value == '' || title.value == '' || content.value == '') {
        alert("Please, fill in all fields");
        return;
    };


    fetch('http://localhost:3000/news_create/create', {
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

        title.value = ''; 
        subtitle.value = '';
        content.value = '';

        title.focus();
        
        alert('The news was created successfully');

    })
    .catch( function(error){ 
        alert('An error has occurred!');
        console.log(error)
    });
});

