async function getUserAndPostsParallel(userId) {
  const [userRes, postsRes] = await Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`),
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
  ]);

  const user = await userRes.json();
  const posts = await postsRes.json();

  console.log("User:", user);
  console.log("Posts:", posts);
}

getUserAndPostsParallel(1);
