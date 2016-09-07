export function callApi(url) {
  fetch("/media").then(response => response.json())
    .then(data => console.log(data))
    .catch(e => console.log(e))
}
