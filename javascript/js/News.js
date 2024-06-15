document.addEventListener('DOMContentLoaded', () => {
    fetchNews();
});

async function fetchNews() {
    const apiKey = 'pub_4548272b975dae7ec6decfc22e94d97c101d8';
    const query = 'war';
    const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=${query}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        displayNews(data.results);
    } catch (error) {
        console.error('Error fetching news:', error);
    }
}

function displayNews(articles) {
    const newsList = document.getElementById('newsList');
    newsList.innerHTML = '';

    articles.forEach(article => {
        const newsItem = document.createElement('div');
        newsItem.className = 'news-item';

        const img = article.image_url ? `<img src="${article.image_url}" alt="News Image">` : '';

        newsItem.innerHTML = `
            ${img}
            <h2>${article.title}</h2>
            <p>${article.description}</p>
        `;

        newsList.appendChild(newsItem);
    });

}




