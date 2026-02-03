document.getElementById("loadDataBtn").addEventListener("click", function () {

    fetch("data.php")
        .then(response => response.text())
        .then(data => {
            document.getElementById("output").innerHTML = data;
        })
        .catch(error => {
            document.getElementById("output").innerHTML = "Error loading data.";
        });

});
