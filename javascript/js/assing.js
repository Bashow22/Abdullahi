{
    let refreshBtn = document.getElementById("refreshBtn")
    let homeBtn = document.getElementById("homeBtn")

    async function getPosts(count) {
        let postData = await fetch("https://jsonplaceholder.typicode.com/posts")
        let posts = await postData.json()
        let output =''
		
		// the if statement checks that the array traversal doesn't go
		// out of index
        if (count < posts.length) {
            for(let i = count; i <= count+10; i++){
                output += `<div class="container">
                <h4>Title: ${posts[i].title}</h4>
                <p>${posts[i].body}</p>
            </div>`
            }
            count++
        }else {
            alert("no new feed")
        }
        document.getElementById("container").innerHTML = output
    }
	
	// resets count by 0 hence returning you to page 1
    function homeButton () {
        count = 0
        getPosts(count)
    }
	
	// Increments count by 10
    function refreshButton () {
        count +=10
        getPosts(count)
    }
	
    refreshBtn.addEventListener('click', refreshButton);
    homeBtn.addEventListener('click', homeButton)
}