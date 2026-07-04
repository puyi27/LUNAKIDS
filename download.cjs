const fs = require('fs');
async function run() {
  fs.mkdirSync('.agents/stitch', { recursive: true });
  const urls = [
    { name: 'lookbook.html', url: "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2EwNzIyZWI3MmJmYzQ0NTI5ZDQ4YWMwYjFiYzRlZDJlEgsSBxDQn9HwggUYAZIBIwoKcHJvamVjdF9pZBIVQhMyNzQzODg5OTY5MjE3OTc3MTE2&filename=&opi=89354086" },
    { name: 'carrito.html', url: "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2ViYWJkZmRhNjk0MzRhMDI4ODUwNTZhNDk2ZTkzYmFhEgsSBxDQn9HwggUYAZIBIwoKcHJvamVjdF9pZBIVQhMyNzQzODg5OTY5MjE3OTc3MTE2&filename=&opi=89354086" },
    { name: 'ficha_producto.html', url: "https://contribution.usercontent.google.com/download?c=CgthaWRhX2NvZGVmeBJ7Eh1hcHBfY29tcGFuaW9uX2dlbmVyYXRlZF9maWxlcxpaCiVodG1sX2YwOWRjY2E5ZWYwNzRmNWRhYjYzNWZhOGJhZjY5ZjM1EgsSBxDQn9HwggUYAZIBIwoKcHJvamVjdF9pZBIVQhMyNzQzODg5OTY5MjE3OTc3MTE2&filename=&opi=89354086" }
  ];
  for (let u of urls) {
    const res = await fetch(u.url);
    const text = await res.text();
    fs.writeFileSync('.agents/stitch/' + u.name, text);
  }
}
run();
