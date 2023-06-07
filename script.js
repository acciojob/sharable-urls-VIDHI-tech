// your code here
function updateURL() {
      var name = document.getElementById("name").value;
      var year = document.getElementById("year").value;

      var urlString = "https://localhost:8080/?name=" + encodeURIComponent(name) + "&year=" + encodeURIComponent(year);

      document.getElementById("url").textContent = urlString;
}