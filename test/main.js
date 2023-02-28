const btn = document.querySelector(".btn");
const URL = "https://jsonplaceholder.typicode.com/posts";
btn.addEventListener("click", getData);

function getData(e) {
  e.preventDefault();
  fetch(URL)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let showData = data.map((item) => {
        return `<li>${item.id} <br> ${item.title} <br>${item.body}</li>`;
      });
      document.querySelector(".userData").innerHTML = showData;
      console.log(showData);
    });
}
