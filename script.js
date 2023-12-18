function betolt(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(data => megjelenit(data))
    .catch(error => console.log("Hiba történt: " + error));
}

function megjelenit(data){
    let table = `<table>`;
    table += `<tr><th>userID</th><th>ID</th><th>Title</th><th>Completed</th></tr>`;
            
    data.forEach(item => {
        `<tr><td>${item[0].userID}</td><td>${item[0].id}</td><td>${item[0].title}</td><td>${item[0].completed}</td></tr>`;
    });

    table = `</table>`;
    document.getElementById("adat").innerHTML = table;
}

window.onload = betolt();