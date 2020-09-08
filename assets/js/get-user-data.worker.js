self.addEventListener("message", async ({ data }) => {
  const result = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json())
  // console.log({ result })
  self.postMessage(result);
})