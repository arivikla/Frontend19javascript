$(function() {


    // GET ALL POSTS
    $('#btnGetAll').click(function(e) {

        fetch('https://jsonplaceholder.typicode.com/posts/')        
        .then(res => res.json())
        .then(data => {
            console.log(data)

            for(post of data) {
                document.getElementById('get-result').innerHTML = 
                `<p>Id: ${post.id}</p><p>Title: ${post.title}</p><p>Body: ${post.body}</p>`
            }
        })

    })

    // GET SPECIFIC POST
    $('#btnGet68').click(function(e) {

        let id = document.getElementById('number').value

        fetch('https://jsonplaceholder.typicode.com/posts/' + id)        
        .then(res => res.json())
        .then(data => {
            console.log(data)
            
            document.getElementById('get-result').innerHTML = 
            `<p>Id: ${data.id}</p><p>Title: ${data.title}</p><p>Body: ${data.body}</p>`

        })

    })


    // POST SPECIFIC POST
    $('#btnPost').click(function(e) {

        let postvalue = document.getElementById('post').value

        fetch('https://jsonplaceholder.typicode.com/posts/', {            
        method: 'POST',
            body: JSON.stringify( {
                title: postvalue,
                body: postvalue,
                userId: 1
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.getElementById('post-result').innerHTML = 
            `<p>Id: ${data.id}</p><p>Title: ${data.title}</p><p>Body: ${data.body}</p>`
        })
    })  

})