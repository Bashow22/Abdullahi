{
    const posts = [
        {title: 'Post One', body: 'This is is post one'},
        {title: "Post Two", body: "This is post two"}
    ]
    button = document.getElementById("myButton")
    count = 2
    function getPosts(){
        setTimeout(()=>{
            let output = ''
            posts.forEach((post, index)=>{
                output += `<li>${post.title}</li>`
            })
            document.getElementById("myUl").innerHTML = output
        }, 2000)
    }
    function createPost(post, callback){
        setTimeout(()=>{
            posts.push(post)
            callback()
        }, 500)
    }
    // getPosts()
    button.addEventListener('click', ()=>{
        count++
        newPost = {title: `Post ${count}`, body: `This is post ${count}`}
        createPost(newPost, getPosts)
    })
    getPosts()
}