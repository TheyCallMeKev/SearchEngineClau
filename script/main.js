const bingSearch = "https://www.bing.com/search?q=";
const googleSearch = "https://www.google.com/search?q=";
const input = document.getElementById("search_input");
const button = document.getElementById("search_button");

button.addEventListener("click", search);
input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        search();
    }
});

function search() {
    if (input.value) {
        window.open(googleSearch + input.value, "_blank");
    }
}