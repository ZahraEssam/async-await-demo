const userId = 1;

// Sequential Fetch
async function fetchSequential() {
  const output = document.getElementById('seqOutput');
  output.textContent = "Loading...";
  
  const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const user = await userRes.json();
  
  const postsRes = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  const posts = await postsRes.json();
  
  output.textContent = `User:\n${JSON.stringify(user, null, 2)}\n\nPosts:\n${JSON.stringify(posts, null, 2)}`;
}

// Parallel Fetch
async function fetchParallel() {
  const output = document.getElementById('parOutput');
  output.textContent = "Loading...";
  
  const [userRes, postsRes] = await Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`),
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
  ]);
  
  const user = await userRes.json();
  const posts = await postsRes.json();
  
  output.textContent = `User:\n${JSON.stringify(user, null, 2)}\n\nPosts:\n${JSON.stringify(posts, null, 2)}`;
}
