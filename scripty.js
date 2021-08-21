
fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(response => response.json())
    .then(data => {
        let postsArray = data.slice(0, 5)
        let newText = ""
        for (posts of postsArray) {
            newText += `
                <h2>${posts.title}</h2>
                <p>${posts.body}</p>
            `
        }
        document.getElementById("post-box").innerHTML = newText
    })

document.getElementById("submitter").addEventListener("click", function(event) {
    event.preventDefault()
    let newTitle = document.getElementById("new-title").value
    let newBody = document.getElementById("new-body").value
    let post = {
        title: newTitle,
        body: newBody
    }
    fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(posts => {
        document.getElementById("post-box").innerHTML =  `
            <h2>${posts.title}</h2>
            <p>${posts.body}</h2>
            ${document.getElementById("post-box").innerHTML}
        `
    }
    
    )
})


