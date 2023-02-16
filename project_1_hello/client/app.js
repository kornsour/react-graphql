const GRAPHQL_URL = "http:localhost:9000/";

// fetch function returns a Promise, which means it's asynchronous
// so we can use an async function
async function fetchGreeting() {
  const response = await fetch(GRAPHQL_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query {
          greeting
        }
      `,
    }),
  });
  // destructuring instead of using something like:
  // const responseBody = await response.json();
  // data = responseBody.data
  const { data } = await response.json();
  return data;
}

const element = document.getElementById("greeting");
element.textContent = "Loading...";
// destructuring instead of using data.greeting
fetchGreeting().then(({ greeting }) => {
  element.textContent = greeting;
});
