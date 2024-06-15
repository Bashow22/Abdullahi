
async function DisplayPosts() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    try {
       
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('error');
        }
        const posts = await response.json();

        
        const postsContainer = document.getElementById('posts-container');

        
        posts.forEach(post => {
           
            const postElement = document.createElement('div');
            postElement.className = 'post';

           
            const postTitle = document.createElement('h2');
            postTitle.textContent = post.title;

           
            const postBody = document.createElement('p');
            postBody.textContent = post.body;

            
            postElement.appendChild(postTitle);
            postElement.appendChild(postBody);

            
            postsContainer.appendChild(postElement);
        });
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}


DisplayPosts();



