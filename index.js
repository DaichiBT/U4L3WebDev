let currentIndex = 0;
const postsPerPage = 5;
let posts = [];

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    posts = data;
    displayPosts();
  })
  .catch(error => console.error('Error fetching posts:', error));

function displayPosts() {
  const postsDiv = document.getElementById('posts');
  const nextIndex = currentIndex + postsPerPage;

  posts.slice(currentIndex, nextIndex).forEach(post => {
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');

    const title = document.createElement('h3');
    title.textContent = post.title;
    postDiv.appendChild(title);

    const body = document.createElement('p');
    body.textContent = post.body;
    postDiv.appendChild(body);

    postsDiv.appendChild(postDiv);
  });

  currentIndex = nextIndex;
}

document.getElementById('next-btn').addEventListener('click', () => {
  if (currentIndex < posts.length) {
    displayPosts();
  } else {
    alert('No more posts to display!');
  }
});
