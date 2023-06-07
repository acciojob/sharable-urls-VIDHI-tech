function updateURL() {
      var name = document.getElementById("name").value;
      var year = document.getElementById("year").value;

      var urlString = "https://localhost:8080/";
      
      if (name) {
        urlString += "?name=" + encodeURIComponent(name);
      }
      
      if (year) {
        urlString += (name ? "&" : "?") + "year=" + encodeURIComponent(year);
      }

      document.getElementById("url").textContent = urlString;
    }