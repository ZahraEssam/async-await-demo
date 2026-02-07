async function getUserAndPosts(userId) {
  const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const user = await userRes.json();

  const postsRes = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
  const posts = await postsRes.json();

  console.log("User:", user);
  console.log("Posts:", posts);
}

getUserAndPosts(1);
